const TodoItem = ({ completed, id, title, toggleTodo, deleteTodo }) => {
  return (
    <li className="flex items-center justify-between py-2 border-b border-border w-62">

      <label className="flex items-center gap-3 cursor-pointer group">
        {/* Hidden real checkbox */}
        <input
          type="checkbox"
          checked={completed}
          onChange={e => toggleTodo(id, e.target.checked)}
          className="peer hidden"
        />

        {/* Custom circle checkbox */}
        <div className="
          w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0
          border-2 border-border bg-white
          peer-checked:bg-primary peer-checked:border-primary
          transition-colors
        ">
          {completed && (
            <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
              <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </div>

        {/* Title with strikethrough when done */}
        <span className={`text-body transition-colors ${completed ? 'text-muted line-through' : 'text-ink'
          }`}>
          {title}
        </span>
      </label>

      {/* Delete button */}
      <button
        className="cursor-pointer hover:text-urgent"
        onClick={() => deleteTodo(id)}
      >hapus</button>

    </li>
  )
}

export default TodoItem