import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './store/reducers/TodoReducer'

const App = () =>{

  const count = useSelector((state) => state.todos.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

          <button onClick={() => dispatch(incrementByAmount(10))}>in amount</button>
          <button onClick={() => dispatch(decrementByAmount(10))}>de amount</button>
          
      </div>
    </div>
  )
}

export default App;