import React from 'react';
import "./ScoreBoard.css";

// ScoreBoard component: Displays the scores for X and O players
// It receives two props - 'scores' (containing xScore and oScore) and 'xPlayer' to determine the active player
export const ScoreBoard = ({ scores, xPlayer }) => {
  const { xScore, oScore } = scores;

  return (
    // Render a div with a "scoreboard" class to contain the score information
    <div className="scoreboard">
      {/* Display X player's score with an "inactive" class when it's not their turn */}
      <span className={`score x-score ${!xPlayer && "inactive"}`}>X - {xScore}</span>

      {/* Display O player's score with an "inactive" class when it's X player's turn */}
      <span className={`score o-score ${xPlayer && "inactive"}`}>O - {oScore}</span>
    </div>
  );
};