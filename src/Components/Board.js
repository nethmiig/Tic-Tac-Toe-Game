import React from 'react';

// Importing Box.js component
import { Box } from "./Box";

// Importing the CSS file for styling
import "./Board.css";

// Board component: Represents the tic-tac-toe game board
// It receives two props - 'board' (array representing the current state of the board) and 'onClick' (function to handle box clicks)
export const Board = ({ board, onClick }) => {
  return (
    // Render a div with a "board" class to contain the tic-tac-toe grid
    <div className='board'>
      {/* Map through each value in the board array and render a Box component for each */}
      {board.map((value, idx) => {
        // Render a Box component with the current value and an onClick event
        return <Box value={value} onClick={() => value === null && onClick(idx)} />;
      })}
    </div>
  );
};

