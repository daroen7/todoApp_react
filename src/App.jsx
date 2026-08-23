import { Navbar } from "./components"
import Quotes from "./components/Quotes"
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import { useEffect, useState } from "react"


const App = () => {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []
    return JSON.parse(localValue)
  })
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  const addTodo = (title) => {
    setTodos(currentTodo => {
      return [
        ...currentTodo, {
          id: crypto.randomUUID(),
          title,
          completed: false
        }
      ]
    })
  }

  const toggleTodo = (id, completed) => {
    setTodos(currentTodo => {
      return currentTodo.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo
      })
    })
  }

  const deleteTodo = (id) => {
    setTodos(currentTodo => {
      return currentTodo.filter(todo => todo.id !== id)
    })
  }
  return (
    <main>
      {/* NAVBAR */}
      <Navbar onSetFilter={setFilter}/>

      {/* QUOTES */}
      <Quotes />
      {/* TODO FORM */}
      <TodoForm onSubmit={addTodo} />
      {/* TODO LIST */}
      <TodoList
        todos={todos}
        filter={filter}
        onSetFilter={setFilter}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </main>
  )
}

export default App