import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

 function ProductList() {
    const{products,dispatch} = useContext(CartContext);
  return (
    <div className='products'>
        {products.map((p) => (
            <div className='product-card' key ={p.id}>
                <h3>{p.name}</h3>
                <p>💲{p.price}</p>
                <button className='btn' onClick = {() => dispatch ({type:"ADD_ITEM", payload:p})}>Add to Cart</button>
                </div>
        ))}
      
    </div>
  );
}
export default ProductList;
