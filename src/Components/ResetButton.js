import React from 'react'
import "./ResetButton.css"
//to reset game for another round after it's over
export const ResetButton = ({resetBoard}) => {
  return (
    <button className="reset-button" onClick={resetBoard}>RESET</button>
  )
}
