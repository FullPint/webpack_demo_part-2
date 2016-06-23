import React from 'react'
import ReactDOM from 'react-dom'
import HelloTest from './helloTest'
import './style.css'

class App extends React.Component {
  render () {
    return (
      <div className="wrapper">
        <HelloTest />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
