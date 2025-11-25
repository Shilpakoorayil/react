import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {

    const myProducts =[
        {id:1, name :"laptop"},
        {id:2, name :"phone"},
    ]


  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {myProducts.map(p => (
            <li key= {p.id}>
                <Link to ={`/produts/${p.id}`}>{p.name}</Link>

            </li>
            

        ))}
      </ul>
    </div>
  )
}

export default Product
//we should map when it was an array