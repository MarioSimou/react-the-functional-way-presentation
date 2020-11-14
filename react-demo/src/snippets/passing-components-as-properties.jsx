import React from 'react'
import ReactDOM from 'react-dom'

const Header = props => {
    return <div>{props.title}</div>
}

const ChildComponent = ({numbers, Header}) => {
    return (
        <div>
            <Header title="Child Component"/>
            <ul>
                {numbers.map(num => <li key={num}>{num}</li>)}
            </ul>
        </div>
    )
}

const ParentComponent = () => {
    const numbers = new Array(5).fill(0).map((_,index) => index + 1)

    return (
        <div>
            <ChildComponent Header={Header} numbers={numbers}/>
        </div>
    )
}

ReactDOM.render(<ParentComponent/>, document.getElementById('root'))