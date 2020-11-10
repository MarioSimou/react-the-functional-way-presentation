import React from 'react'
import ReactDOM from 'react-dom'

const mapFunctionToProps = mapFn => Component => props  => <Component {...mapFn(props)} />


const App = ({initialCounter}) => {
    const [counter, setCounter] = React.useState(initialCounter)

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

const AppContainer = mapFunctionToProps(preloadPropsFn)(App)

ReactDOM.render(<AppContainer/>, document.getElementById('root'))