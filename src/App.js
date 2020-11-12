import React, { useState } from "react"
import './App.css';

import Todo from "./todo.js"
// import Room from "./component/room/room.js"
import Count from "./component/counter/counter"
import ThemeContext from "./context/themeContext"
import Header from "./component/switchTheme/header"

var tasks=["Bootcamp class","Virtual Assistant class", "Korean Language" , "Exercise"]

function App() {
  const themeHook = useState('light')
  return (
    <div>
      <Todo tasks={tasks}/>
      <ThemeContext.Provider value={themeHook}>
        <Header/>
      </ThemeContext.Provider>
      {/* <Room/> */}
      <Count/>
    </div>
  );
}

export default App;
