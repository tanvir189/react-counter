
import React,{useState} from "react";
import './App.css';

export default function App() {
 const [count,setCount]= useState(0)
  return (
    <div className="cont">
    <button className="app" onClick={()=>setCount(count-1)}>-</button>
    <button className="app" onClick={()=>setCount(0)}>{count}</button>
    <button className="app" onClick={()=>setCount(count+1)} >+</button>
    
    </div>
   ) 
}
