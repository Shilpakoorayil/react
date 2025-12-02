import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

 function CartItem({ item }) {
    const {dispatch} = useContext(CartContext);
  return (
<li className="cart-item">
    <span>
        {item.name} - 💲{item.price} X {item.qty}
    </span>
    <div>
        <button onClick={() =>dispatch ({type : "INCREASE",payload : item.id })}> ➕</button>
         <button onClick={() =>dispatch ({type : "DECREASE",payload : item.id })}> ➖</button>
          <button onClick={() =>dispatch ({type : "REMOVE_ITEM",payload : item.id })}>❌ </button>
    </div>

    </li>
      
   
  );
}
export default CartItem;
