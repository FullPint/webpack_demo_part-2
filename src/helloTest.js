import React from 'react'
import NowMessage from './nowMessage'

class HelloTest extends React.Component {
  render () {
    return (
      <div>
        <h1 className="hello-test"> Test: Hello World </h1>
        <NowMessage />
      </div>
    ) }
}
export default HelloTest
