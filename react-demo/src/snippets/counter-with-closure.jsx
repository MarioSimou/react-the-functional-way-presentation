import React from 'react'
import ReactDOM from 'react-dom'

const mapFunctionsToProps = mapFn => Component => props  => <Component {...mapFn(props)} />


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

const preloadPropsFn = props => ({
    initialCounter: 0,
    ...props
})

const AppContainer = mapFunctionsToProps(preloadPropsFn)(App)

ReactDOM.render(<AppContainer/>, document.getElementById('root'))