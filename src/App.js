import React, { Component } from 'react'
import Square from './Components/Square'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: [null, null, null, null, null, null, null, null, null],

winner1: "",

      counter: 0,
      X: "X",
      
    }
  }

  calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        
        return squares[a];
      }
    }
    return null;
  }




  handleGamePlay = (index) => {



    const {squares} = this.state

    const squares1 = this.state.squares.slice(index)
    if(this.calculateWinner(squares) || squares[index]) {
      return;
    }

    let {counter} = this.state
  console.log(counter)

  counter = counter +1
  this.setState({counter: counter})
      
  
      if (counter % 2 === 0) {
      
        if (squares[index] === "🥔") {

          
          squares[index] = '🥔'
        this.setState({squares: squares})
        counter = counter -1
        this.setState({counter: counter})
        
        }
        else {
        squares[index] = 'X'
        this.setState({squares: squares})
       
        }
      //console.log(counter)

      }
      else if (counter % 2 === 1) {

        
        if (squares[index] === "X") {
          
          squares[index] = 'X'
          this.setState({squares: squares})
          counter = counter -1
          this.setState({counter: counter})

        }
        else {
          squares[index] = '🥔'
          this.setState({squares: squares})
        }
        
      
        //console.log(counter)

      }
    // if counter go over 9 display gameover
    

// squares[index] = "X"
// console.log(squares[index]) 
// this.setState({squares: squares})


  }

restartGame = () => {
  this.setState({squares: [null, null, null, null, null, null, null, null, null]})
this.setState({counter: 0})

}


  render() {
    const winner = this.calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
      alert(status)
      

    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : '🥔');
    }
    

    return(
      <main>
      <h1>Tic Tac P🥔tat🥔</h1> 
      <div className='gameboard'>

       
        
        {this.state.squares.map((value, index)  => {
          return(
          <Square
      
          key = {index}
          value = {this.state.squares[index]}
          index = {index}
          handleGamePlay = {this.handleGamePlay}
          
        />

    
      
          
          )
        })} 
        </div>
        <br></br>
        <center><button onClick={this.restartGame} className='button' >RESET GAME</button></center> 
        <br></br>
      <footer>~ Coded by JICaddick & GitHub Co-Pilot</footer> 
      </main>
    )
  }
}
export default App