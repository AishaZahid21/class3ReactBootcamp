import React from "react"
import './App.css';

import Todo from "./todo.js"
import Room from "./room.js"
import Count from "./counter"

var tasks=["Bootcamp class","Virtual Assistant class", "Korean Language" , "Exercise"]

function App() {
  
  return (
    <div>
      <Todo tasks={tasks}/>
      <Room/>
<Count/>
    </div>
  );
}

export default App;
