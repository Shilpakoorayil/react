import React, { useState } from 'react'

const BasicForm = () => {

  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();



if (!email) {
  setError("Email is required");
} else if (!/^\S+@\S+\.\S+$/.test(email)){
  setError("Enter valid email");
} else {
  setError("");
  alert("Form Submitted");
  console.log('form',email)
}
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="email"
        value={email}
        placeholder='Enter your email'
        onChange={(e) => setEmail(e.target.value)}
      />
      {/* <br /> */}
       &nbsp;&nbsp;&nbsp;
      {error && <p style={{color:"red"}}>{error}</p>}

      <button type='submit'>Submit</button>
    </form>
  )
}

export default BasicForm;
