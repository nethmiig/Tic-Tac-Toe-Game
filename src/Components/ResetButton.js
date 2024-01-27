import React from 'react';
import "./ResetButton.css";

// ResetButton component: A button to reset the game for another round after it's over
// It receives a prop 'resetBoard' which is a function to reset the game state
export const ResetButton = ({ resetBoard }) => {
  return (
    // Render a button with a "reset-button" class and an onClick event to trigger the reset function
    <button className="reset-button" onClick={resetBoard}>
      RESET
    </button>
  );
};