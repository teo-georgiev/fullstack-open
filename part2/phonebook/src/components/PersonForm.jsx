const PersonForm = ({ 
  addName, newName, handleNameLog,
  newNumber, handleNumberLog
}) => {
  return (
    <form onSubmit={addName}>
      <div>
        name: 
        <input 
          value={newName} 
          onChange={handleNameLog}
        />
      </div>
      <div>
        number:
        <input
          value={newNumber}
          onChange={handleNumberLog}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>  
    </form>
  )
}

export default PersonForm