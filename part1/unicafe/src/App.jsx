import { useState } from 'react'

const Title = ( {text} ) => <h1>{text}</h1>

const Button = ( {onClick, text} ) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const StatisticsLine = (props) => {
  return (
    <tr>
      <td>
        {props.text} 
      </td>
      <td>
        {props.value}
      </td>
    </tr>
  )
}

const Statistics = ( {good, neutral, bad, all, avg, positive} ) => {
  if (all === 0) {
    return (
      <p>
        No feedback given
      </p>
    )
  }
  return (
    <div>
      <table>
        <tbody>
          <StatisticsLine value={good} text="good" />
          <StatisticsLine value={neutral} text="neutral" />
          <StatisticsLine value={bad} text="bad" />
          <StatisticsLine value={all} text="all" />
          <StatisticsLine value={avg} text="average" />
          <StatisticsLine value={positive + " %"} text="positive" />
        </tbody>
      </table>
    </div>
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
      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
        all={allFeedback.length}
        avg={avg}
        positive={positive}
      />
    </div>
  )
}

export default App