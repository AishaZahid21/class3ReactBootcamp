import React , {useState} from "react"
import "./room.css"

function Room(){
    let [isLit , setLit] = useState(true);
    let [tempValue] = useState({'lit': 72, 'dark':44});
    
  
  return <div
   className={`room ${isLit ? 'lit': 'dark'}`}>
    This room is {isLit ? 'lit' : 'dark'}
  <br/>
  Room temperature is {isLit ? tempValue.lit : tempValue.dark}
  <br/>
 
  <button onClick={()=>{
    if(!isLit){
      setLit(!isLit)
        }
  }}> ON </button>
  
  <button onClick={()=>{
    if(isLit){
      setLit(!isLit)
    }
  }}> OFF </button>
  
  </div>
  
}

export default Room