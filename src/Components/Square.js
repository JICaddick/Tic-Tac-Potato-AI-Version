import React, { Component } from 'react'
import '/Users/learnacademy/Desktop/Personal Projects/co-pilot-tic-tac-toe/src/App.css'

class Square extends Component {

handleClick = () => {
  this.props.handleGamePlay(this.props.index)

} 

  render() {
    return(
      <>
        <div className ="square" onClick = {this.handleClick}> <h1>{this.props.value}</h1></div>
      </>
    )
  }
}
export default Square