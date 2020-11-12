import React , {useState} from "react"
import Countvalue from "./countValue"

 function Count(){
    let [count, setCount]= useState(0);
    return <div>
        <Countvalue count= {count}/>
        <br/>
        <button onClick={()=>{
    
    setCount(++count)
     }}> + </button>
     
     <button onClick={()=>{
      setCount(--count)
     }}> - </button>
     
    </div>
 }
 export default Count