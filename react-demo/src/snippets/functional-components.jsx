import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const [counter, setCounter] = React.useState(0)

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