import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, toggleTodo, deleteTodo, filter }) => {
  const filtered = todos.filter(({ completed }) => {
    if (filter === 'active') return !completed
    if (filter === 'completed') return completed
    return true
  })
  return (
    <>
      <div id='todoList'>
        <div className='list-container'>
          <ul className='list'>
            {filtered.length === 0 && 'No Todos'}
            {filtered.map((todo) => {
              return (
                <TodoItem
                  {...todo}
                  key={todo.id}
                  toggleTodo={toggleTodo}
                  deleteTodo={deleteTodo}
                />
              )
            })}
          </ul>
        </div>
      </div>
    </>
  )
}

export default TodoList