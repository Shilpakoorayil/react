import React from 'react'

const CallingFunction = () => {

// Adding 2 fnctions

function Greeting(name){
    return `Hello,${name}`
}
function GetGreeting(){
    return <h2>{Greeting("Shilpa")}</h2>
}

  return (
    <div>
      <GetGreeting/>
    </div>
  )
}

export default CallingFunction
