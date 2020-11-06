import React from "react"
import './App.css';

import Todo from "./todo.js"
import Room from "./room.js"

var tasks=["Bootcamp class","Virtual Assistant class", "Korean Language" , "Exercise"]

function App() {
  
  return (
    <div>
      <Todo tasks={tasks}/>
      <Room/>
    </div>
  );
}

export default App;
