import React from 'react'
import ReactDOM from 'react-dom'

const ChildComponent = (props) => {
    return (
        <ul>
            {props.numbers.map(num => <li key={num}>{num}</li>)}
        </ul>
    )
}

const ParentComponent = () => {
    const numbers = new Array(5).fill(0).map((_,index) => index + 1)

    return (
        <div>
            <ChildComponent numbers={numbers}/>
        </div>
    )
}

ReactDOM.render(<ParentComponent/>, document.getElementById('root'))