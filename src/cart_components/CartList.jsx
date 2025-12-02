import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';

function CartList() {
  const { cart, dispatch } = useContext(CartContext);

  return (
    <div className='cart'>
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </ul>

          <button
            className='btn-clear'
            onClick={() => dispatch({ type: "RESET" })}
          >
            Clear Cart
          </button>
        </>
      )}

    </div>
  );
}

export default CartList;
