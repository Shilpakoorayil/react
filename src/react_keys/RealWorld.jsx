import React from 'react'

const RealWorld = () => {
const products=[
    {id:"p1" , name:"t-shirit"},
      {id:"p2" , name:"jean"},

]


  return (
    <div>
      {products.map(prdt => (
        <li key={prdt.id}>{prdt.name}</li>
      ))}
    </div>
  )
}

export default RealWorld
