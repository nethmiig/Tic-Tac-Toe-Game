import React from 'react' // Added functional component

import "./Box.css" //import css


export const Box = ({value, onClick}) => { //taking value as a prop
  //Assigning a variable
  const style = value ==="X" ? "box x" : "box o"; //if assigned value is X give the box x or else o
  return (
    //Assigning value to the onclick function
  
      <button className={style} onClick={onClick}>{value}</button>
    )
    
}
