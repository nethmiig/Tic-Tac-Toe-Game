import React, {useState} from "react";

import './App.css';

//Importing Board.js to app.js
import {Board} from "./Components/Board"
//importing from components scoreboard
import { ScoreBoard } from "./Components/ScoreBoard"
import { ResetButton } from "./Components/ResetButton";

function App() {

  //winning conditions function
  const WIN_CONDITIONS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
  //create a board with 9 boxes as a state list
  const [board, setBoard] = useState(Array(9).fill(null));
  //function to know which player's turn 
  const [xPlaying, setXPlaying] = useState(true);
  //setting scores
  const [scores, setScores] = useState({xScore: 0, oScore: 0 }) 
  //to set game over
  const [gameOver, setGameOver] = useState(false)
  //function to work inside board
  const handleBoxClick = (boxIdx) => {
  
    const updatedBoard = board.map((value, idx) => {
      if(idx === boxIdx) {
        return xPlaying === true ? "X" : "O";
      
      } else{
        return value;
      }
    })
    //to check winner
    const winner = checkWinner(updatedBoard);
    //Add scores to winners

    if(winner) {
      if(winner=== "O") {
        let {oScore} = scores;
        oScore += 1
        setScores({...scores, oScore})
      } else {
        let {xScore} = scores;
        xScore += 1
        setScores({...scores, xScore})

      }
    }

   

    setBoard(updatedBoard);
    //if X is playing it'll give X if not O
    setXPlaying(!xPlaying);
  }
  
  const checkWinner = (board) => {
    for(let i = 0; i< WIN_CONDITIONS.length; i++) {
     const [x,y,z] =WIN_CONDITIONS[i];
     
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGameOver(true)
        return board[x];
      }
    }
  }
  //Rendering board and passing our function as a prop and on click to return expected result

  //defining function to reset values after game over
  const resetBoard = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null))
  }

  //passing scores as a prop to get it on top score board
  return (
    <div classname="App">
      <ScoreBoard scores={scores} xPlaying={xPlaying}/> 
      <Board board = {board} onClick={gameOver ? resetBoard : handleBoxClick} />
      <ResetButton resetBoard={resetBoard}/>
      
    </div>
  );


}

export default App;