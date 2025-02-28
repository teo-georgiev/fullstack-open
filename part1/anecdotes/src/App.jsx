import { useState} from 'react'

const Title = ({ text }) => <h2>{text}</h2>

const Display = ({ text }) => <p>{text}</p>

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const selectAnecdote = () => {
    const randomNum = Math.floor( Math.random() * anecdotes.length )
    setSelected(randomNum)
  }

  const increaseVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }
  
  function maximum() {
    let max = votes[0]
    let j = 0
    for (let i = 1; i < votes.length; i++)
      if (votes[i] > max){
        max = votes[i]
        j = i
      }
    return j
  }
  const maxVotes = maximum()

  console.log(votes)
  return (
    <div>
      <Title text="Anecdote of the day"/>
      <Display text={anecdotes[selected]}/>
      <Display text={"has " + votes[selected] + " votes"}/>
      <Button onClick={increaseVote} text='vote' />
      <Button onClick={selectAnecdote} text='next anecdote' />

      <Title text="Anecdote with most votes"/>
      <Display text={anecdotes[maxVotes]}/>
      <Display text={"has " + votes[maxVotes] + " votes"}/>
    </div>
  )
}

export default App