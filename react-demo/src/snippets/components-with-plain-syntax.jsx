import React from 'react'
import ReactDOM from 'react-dom'

const App = () => 
    React.createElement('div', null, 
            React.createElement('h1', null, 'Hello World'))

ReactDOM.render(App(), document.getElementById('root'))