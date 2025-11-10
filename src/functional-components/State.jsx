import React, { use, useState } from 'react'

const State = () => {
    //initialize the time
const [time,setTime] =useState(0);

//time increment function
const handleIncrement =() =>{
    setTime(time+1);
}
const handleReset =() =>{
 setTime(0);
}
const handleDecrement =() =>{
    setTime(time-1);
}

  return (
    <div>
      <h2>Time :{time} seconds</h2>
      <button onClick={handleIncrement}>Increments</button>&nbsp;
    <button onClick={handleReset}>Reset</button>&nbsp;
       <button onClick={handleDecrement}>Decrement</button>
   
    
    </div>
  )
}

export default State
