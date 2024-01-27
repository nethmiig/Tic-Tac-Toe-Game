// Importing necessary dependencies and styles
import React, { useState } from "react";
import './App.css';

// Importing Board.js, ScoreBoard.js, and ResetButton.js components
import { Board } from "./Components/Board";
import { ScoreBoard } from "./Components/ScoreBoard";
import { ResetButton } from "./Components/ResetButton";

// Main App component
function App() {
  // Winning conditions for the game
  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  // State to manage the game board, initialized with 9 null values
  const [board, setBoard] = useState(Array(9).fill(null));

  // State to track which player's turn it is (X or O)
  const [xPlaying, setXPlaying] = useState(true);

  // State to manage the scores for X and O
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });

  // State to track whether the game is over or not
  const [gameOver, setGameOver] = useState(false);

  // Function to handle a box click on the game board
  const handleBoxClick = (boxIdx) => {
    // Create a new board array with the updated value for the clicked box
    const updatedBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return xPlaying ? "X" : "O";
      } else {
        return value;
      }
    });

    // Check for a winner after the box click
    const winner = checkWinner(updatedBoard);

    // Update scores if there's a winner
    if (winner) {
      if (winner === "O") {
        let { oScore } = scores;
        oScore += 1;
        setScores({ ...scores, oScore });
      } else {
        let { xScore } = scores;
        xScore += 1;
        setScores({ ...scores, xScore });
      }
    }

    // Update the game board, toggle player turn, and set game over state
    setBoard(updatedBoard);
    setXPlaying(!xPlaying);
  };

  // Function to check if there is a winner based on the current board
  const checkWinner = (board) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];

      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGameOver(true);
        return board[x];
      }
    }
  };

  // Function to reset the board and game state
  const resetBoard = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
  };

  // Rendering the main App component with child components and passing necessary props
  return (
    <div className="App">
      {/* ScoreBoard component to display scores */}
      <ScoreBoard scores={scores} xPlaying={xPlaying} />

      {/* Board component to display the tic-tac-toe board */}
      <Board board={board} onClick={gameOver ? resetBoard : handleBoxClick} />

      {/* ResetButton component to reset the game */}
      <ResetButton resetBoard={resetBoard} />
    </div>
  );
}

// Exporting the App component as the default export
export default App;
