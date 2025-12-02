import { useReducer } from "react";
import cartReducers from "./Reducers/cartReducers";


export default function ShoppingCart(){
    const [cart, dispatch] = useReducer(cartReducers, []);
    return (
        <div>
            <h2 className="title"> Shopping Cart</h2>
            <button className="btn" onClick={() => dispatch({ type: "ADD_ITEM", payload: "Apple" })}>Add  Apple</button>
            <button className="btn" onClick={() => dispatch({ type: "ADD_ITEM", payload: "Orange" })}>Add Orange</button>

            <ul>
                {cart.map((item) => (<li key={item.id} className="cart-item">
                    {item.name} <span className="qty">x    </span>{item.qty}
                     <button className="btn" onClick={() => dispatch({ type: "INCREASE", payload: item.id })}> ➕ </button>
                <button className="btn" onClick={() => dispatch({ type: "DECREASE", payload: item.id })}>➖ </button>
                <button className="btn" onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item.id })}> ❌ </button>


                </li>))}
               


            </ul>
        </div>
    )
}