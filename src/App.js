import React, {useState} from "react";

import './App.css';

//Importing Board.js to app.js
import {Board} from "./Components/Board"

function App() {
  //create a board with 9 boxes as a state list
  const [board, setBoard] = useState(Array(9).fill(null));
  
  //Rendering board and passing our list as a prop
  return (
    <div classname="App">
      <Board board = {board} onClick={null} />
      
    </div>
  );


}

export default App;