const Contact = ({ contact }) => {
  return <li>{contact.name} {contact.number}</li>
}

const Persons = ({ showFiltered }) => {
  return (
    <ul>
      {showFiltered.map(contact =>
        <Contact 
          key={contact.id}
          contact={contact}
        />
      )}
    </ul>
  )
}

export default Persons