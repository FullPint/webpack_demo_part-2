import React from 'react'

class NowMessage extends React.Component {
  constructor (props) {
    super(props)
    this.now = new Date().toLocaleString()
  }

  componentDidMount () {
    setInterval(() => {
      this.setState({
        currentTime: this.now = new Date().toLocaleString()
      })
    }, 1000)
  }

  render () {
    return (
      <p className="now-message"> It is {this.now} </p>
    )
  }
}

export default NowMessage
