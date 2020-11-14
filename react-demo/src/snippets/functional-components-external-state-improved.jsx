import React from 'react'
import ReactDOM from 'react-dom'

const mapPropsToComponent = mapFn => Component => props => <Component {...mapFn(props)} />

const fetchData = setCounter => {
    setTimeout(setCounter, 2000, 10)
}

const App = ({initialCounterState, fetchData}) => {
    const [counter, setCounter] = React.useState(initialCounterState)

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

const mapPropsToComponentFn = props => ({
    initialCounterState: 0,
    fetchData,
    ...props
})

const AppContainer = mapPropsToComponent(mapPropsToComponentFn)(App)

ReactDOM.render(<AppContainer/>, document.getElementById('root'))