import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = { counter: 0 }
    }
    increase(){
        this.setState({...this.state, counter: this.state.counter + 1})
    }
    decrease(){
        this.setState({...this.state, counter: this.state.counter - 1})
    }

    render(){
        return (
            <div>
                <div>
                    <span>Counter: </span>
                    <span>{this.state.counter}</span>
                </div>
                <button type="button" onClick={this.increase.bind(this)}>Increase</button>
                <button type="button" onClick={this.decrease.bind(this)}>Decrease</button>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))