import { useState } from "react"

const TodoForm = ({onSubmit}) => {
  const [newItem, setNewItem] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (newItem === "") return

    onSubmit(newItem)
    setNewItem("")
  }

  return (
    <>
      <div id='form-container'>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="new-item"></label>
            <input value={newItem} onChange={(e) => setNewItem(e.target.value)} type="text" id="new-item" />
          </div>
          <button>Tambah</button>
        </form>
      </div>

    </>
  )
}

export default TodoForm