import React from 'react'

const Rendering = () => {
    const fruits =["Apple","Mango","Orange"];
  return (
    <div>
      <ul>
{fruits.map((fruit, index) =>
     ( <li key={index}>{fruit}</li> ))}
      </ul>
    </div>
  )
}

export default Rendering
