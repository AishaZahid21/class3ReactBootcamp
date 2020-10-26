import React from "react"
import './todo.css'
function Todo(props){

   const tasks= props.tasks

   const listOfTasks = tasks.map((task)=>
    <li key={task.toString()}>
        {task}
    </li>
   )

    return(
    <ul>{listOfTasks}</ul>
    );
}

export default Todo;