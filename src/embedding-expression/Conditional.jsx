import React from 'react'

const Conditional = () => {

  //  let isloggedIn=true;//output => Welcome back
     let isloggedIn=false; //output => Please sign-in
    

  return (
    <div>
      <p>{isloggedIn ?'Welcome back' : 'Please sign-in' }</p>
    </div>
  )
}

export default Conditional
