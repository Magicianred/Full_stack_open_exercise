import React, {useState} from 'react';

const Button = ({clickEvent, name}) => {
    return(
        <>
        <button onClick={clickEvent}>
            {name}
        </button>
        </>
    )
}

const Statistic = ({value, text}) => {
    return (
        <>
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
        </>
    )
}

const Statistics = ({good, neutral, bad}) => {
    const total = good + neutral + bad
    const average = total / 3
    const positive = (good / total) * 100

    if (good === 0 && neutral === 0 && bad === 0){
        return (
            <p>No feedback given</p>
        )
    }
    else{
        return (
            <>
            <h2>Statistics</h2>
            <table>
                <tbody>
                <Statistic text="good" value={good}/>
                <Statistic text="neutral" value={neutral}/>
                <Statistic text="bad" value={bad}/>
                <Statistic text="total" value={total}/>
                <Statistic text="average" value={average}/>
                <Statistic text="positive" value={isNaN(positive)? 0: positive + " %"}/>
            </tbody>
            </table>
            </>
        )
    } 
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return(
        <div>
            <h1>Give Feedback</h1>
            <Button clickEvent={() => setGood(good + 1)} name="Good"/>
            <Button clickEvent={() => setNeutral(neutral + 1)} name="Netral"/>
            <Button clickEvent={() => setBad(bad + 1)} name="Bad"/>
            <Statistics good={good} neutral={neutral} bad={bad}/>
        </div>
    )
}

export default App;
