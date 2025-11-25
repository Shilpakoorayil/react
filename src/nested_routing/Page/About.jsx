import React from 'react'
import { FcAbout } from "react-icons/fc";

const About = () => {
  return (
    <div style ={{display:'flex', flexdirection :'column', justifyContent:'center',
           alignItems:'center'}}>
               <h2><FcAbout />About Us</h2>
               <p>We are from Techolas Calicut</p>
         
       </div>
  )
}

export default About
