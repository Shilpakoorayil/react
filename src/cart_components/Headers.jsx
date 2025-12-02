import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';

 function Headers() {
    const {cart} = useContext(CartContext);

    const totalQty = cart.reduce((sum,item) => sum +item.qty,0);
    const totalPrice = cart.reduce((sum,item) => sum +item.price * item.qty,0);

   return (
    <header>
        <h1>My Shopping Cart</h1>
        <div>
            <p>Item : {totalQty}</p>
             <p>Total : {totalPrice}</p>
        </div>
    </header>

   );
  
}
export default Headers;
