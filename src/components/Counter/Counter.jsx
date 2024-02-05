import React, { useState } from 'react'
import { Button } from '../Button/Button'
import './Counter.css'

export const Counter = () => {
  const [counter, setCounter] = useState(0)

  const handleIncrement = () => {
    setCounter((prevState) => prevState + 1)
  }

  const handleDecrement = () => {
    setCounter((prevState) => {
      return prevState === 0 ? prevState : prevState - 1
    })
  }

  return (
    <div className="counter">
       
      
      <div className="counter-buttons">
        <Button title={'+'} onClick={handleIncrement} />
        <div>{counter}</div>

        <Button title={'-'} onClick={handleDecrement} />
      </div>
    </div>
  )
}
