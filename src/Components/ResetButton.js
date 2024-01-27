import React from 'react'
import "./ResetButton.css"

export const ResetButton = ({resetBoard}) => {
  return (
    <button className="reset-button" onClick={resetBoard}>RESET</button>
  )
}
