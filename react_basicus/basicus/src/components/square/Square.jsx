import React,{useState} from 'react'
import s from './Square.module.css'
export default  function Square ()  {

    const [color,setColor]= useState(true);
    const squareStyles = {
        backgroundColor: color ? 'red':'green'
        
    }
    const changeColor = () => setColor(!color);
  return (
    <div className ={s.square} 
    style={squareStyles}
    onClick={changeColor}
    >
    </div>
  )
}

