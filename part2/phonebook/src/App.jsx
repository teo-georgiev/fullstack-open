import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [contactList, setcontactList] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber,
      id: String(contactList.length + 1)  
    }
    
    if(contactList.some(person => person.name === nameObject.name)) {
      console.log(contactList)
      alert(`${nameObject.name} is already added to phonebook`)
    } else {
      setcontactList(contactList.concat(nameObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleNameLog = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberLog = (event) => {
    setNewNumber(event.target.value)
  }

  const showFiltered = newFilter === ''
    ? contactList
    : contactList.filter(contact => 
      contact.name.toUpperCase().includes(newFilter.toUpperCase())
    )

  const handleFilter = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} handleFilter={handleFilter}/>
      <h3>Add a new contact</h3>
      <PersonForm 
        addName={addName}
        newName={newName}
        handleNameLog={handleNameLog}
        newNumber={newNumber}
        handleNumberLog={handleNumberLog}
      />
      <h3>Numbers</h3>
      <Persons showFiltered={showFiltered}/>
    </div>
  )
}

export default App