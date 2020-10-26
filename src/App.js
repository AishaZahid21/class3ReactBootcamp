import React from "react"
import './App.css';

import Todo from "./todo.js"

var tasks=["Bootcamp class","Virtual Assistant class"]

function App() {
  
  return (
    <div>
      <Todo tasks={tasks}/>
    </div>
  );
}

export default App;
