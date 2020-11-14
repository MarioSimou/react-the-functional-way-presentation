import React from 'react'
import ReactDOM from 'react-dom'

const fetchData = setCounter => {
    setTimeout(setCounter, 2000, 10)
}

const App = () => {
    const [counter, setCounter] = React.useState(0)

    React.useEffect(() => {
        fetchData(setCounter)        
    }, [])

    return (
        <div>
            <div>
                <span>Counter: </span>
                <span>{counter}</span>
            </div>
            <button type="button" onClick={() => setCounter(counter + 1)}>Increase</button>
            <button type="button" onClick={() => setCounter(counter - 1)}>Decrease</button>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))