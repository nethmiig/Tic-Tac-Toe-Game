import React from 'react'

import "./ScoreBoard.css"

//taking two properties

export const ScoreBoard = ({scores, xPlayer}) => {
  const {xScore, oScore} = scores;
  return (
    <div className="scoreboard">
      <span className={'score x-score ${!xPlaying && "inactive"}'}>X - {xScore}</span>
      <span className={'score o-score ${xPlaying && "inactive"}'}>O - {oScore}</span>
    </div>
  )
}
