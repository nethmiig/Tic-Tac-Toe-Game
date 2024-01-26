import React from 'react'
//Importing Box.js to app.js
import {Box} from "./Box"
//css file of board
import "./Board.css"

export const Board = ({board, onClick}) => {
  return (
    <div className='board'>
        {board.map((value, idx) => {
            return <Box value={value} onClick={() => onClick(idx)} />
        })}
        
    </div>
  )
}
