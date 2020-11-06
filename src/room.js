import React , {useState} from "react"
import "./room.css"

function Room(){
    const [isLit , setLit] = useState(true);
    const [tempValue, setTemp] = useState(72);
    const brightness = isLit ? 'lit': 'dark';
  
  return <div
   className={`room ${brightness}`}>
    This room is {isLit ? 'lit' : 'dark'}
  <br/>
  Room temperature is {tempValue}
  <br/>
  
  <button onClick={()=>{
    if(!isLit){
      setLit(!isLit)
      setTemp(72)
    }
  }}> ON </button>
  
  <button onClick={()=>{
    if(isLit){
      setLit(!isLit)
     setTemp(44)
    }
  }}> OFF </button>
  
  <br/>
  
  <button onClick={()=>{
    var newTempValue = tempValue + 1
    setTemp(newTempValue)
  }}> + </button>
  
  <button onClick={()=>{
    var newTempValue = tempValue - 1
    setTemp(newTempValue)
  }}> - </button>
  <br/>
  
  </div>
  
}

export default Room