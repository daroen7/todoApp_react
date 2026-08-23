

const Navbar = ({ onSetFilter }) => {
  return (
    <nav>
      <div>
        {/* <img src="" alt="" /> */}
        <h1 className='text-3xl font-bold text-center py-4'>Todo App</h1>
      </div>

      <div className="button-container">
        <button
          className="button-navbar"
          onClick={() => onSetFilter('all')}
          >ِAll</button>
        <button
          className="button-navbar"
          onClick={() => onSetFilter('active')}
          >ِActive</button>
        <button
          className="button-navbar"
          onClick={() => onSetFilter('completed')}
        >ِCompleted</button>
      </div>
    </nav>
  )
}

export default Navbar