import React,{useState} from 'react'
import s from './counter.module.css'

export default function Counter  ()  {

  let [count, setCount] = useState(0)
    //let count = 5; 

    const incr = () =>{
      setCount (++count);
      console.log(count)
    }

      const decr = () =>{
        setCount (--count);
        console.log(count)
    }
  return (
    <div className={s.counter}>
       <button onClick={decr}>-</button>
       <p>{count}</p>
       <button onClick={incr}>+</button>


    
    </div>
  )
}


