import { useState } from 'react'

const Title = ( {text} ) => <h1>{text}</h1>

const Button = ( {onClick, text} ) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistics = ( props ) => {
  return (
    <p>{props.text} {props.count}</p>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allFeedback, setAll] = useState([])

  const feedbackGood = () => {
    setAll(allFeedback.concat(1))
    const updateGood = good + 1
    setGood(updateGood)
  }
  
  const feedbackNeutral = () => {
    setAll(allFeedback.concat(0))
    const updateNeutral = neutral + 1
    setNeutral(updateNeutral)
  }

  const feedbackBad = () => {
    setAll(allFeedback.concat(-1))
    const updateBad = bad + 1
    setBad(updateBad)
  }

  let feedbackSum = allFeedback.reduce((acc, currValue) => acc + currValue, 0)
  let avg = 0
  let positive = 0

  if (allFeedback.length !== 0) {
    avg = feedbackSum / allFeedback.length
    positive = good / allFeedback.length * 100
  }

  return (
    <div>
      <Title text="give feedback"/>
      <Button onClick={feedbackGood} text="good"/>
      <Button onClick={feedbackNeutral} text="neutral"/>
      <Button onClick={feedbackBad} text="bad"/>

      <Title text="statistics"/>
      <Statistics count={good} text="good" />
      <Statistics count={neutral} text="neutral" />
      <Statistics count={bad} text="bad" />
      <Statistics count={allFeedback.length} text="all" />
      <Statistics count={avg} text="average" />
      <Statistics count={positive + " %"} text="positive" />
    </div>
  )
}

export default App