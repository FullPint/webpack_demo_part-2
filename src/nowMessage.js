import React from 'react'

class NowMessage extends React.Component {
  constructor (props) {
    super(props)
    this.now = new Date().toLocaleString()
  }

  render () {
    return (
      <p className="now-message"> It is {this.now} </p>
    )
  }
}

export default NowMessage
