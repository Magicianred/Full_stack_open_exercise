import React, {useState} from 'react';

const Button = ({clickEvent, text}) => {
  return(
      <button onClick={clickEvent}>{text}</button>
  )
}

const App = () => {

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState({0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0})
  

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const HandlePoints = () => {
    const newPoints = { 
      ...points, 
      [selected]: points[selected] + 1
    }
    setPoints(newPoints)
  }

  const NextAnecdote = () => {
    let index = Math.floor(Math.random() * 6)
    while (index === selected){
      index = Math.floor(Math.random() * 6);
    }
    setSelected(index);
  }

  const MaxAnecdote = () => {
    let max_val = 0
    for (let i = 0; i < 6; i++){
      if (points[i] > points[max_val]){
        max_val = i
      }
    }
    if (max_val !== 0){
      return(
        <p>{anecdotes[max_val]}</p>
      )
    }
    else{
      return(
        <p>No votes yet!!</p>
      )
    }
  }

  return(
    <div>
      <h1>
        Anecdote of the day
      </h1>
      {anecdotes[selected]}
      <p>has {points[selected]} votes</p>
      <Button clickEvent={HandlePoints} text="vote"/>
      <Button clickEvent={NextAnecdote} text="next anecdote"/>
      <h1>
        Anecdote with most votes
      </h1>
      <MaxAnecdote />
    </div>
  )
}

export default App;
