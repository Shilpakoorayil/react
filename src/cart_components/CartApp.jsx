import React from 'react'
import { CartProvider } from '../context/CartContext'
import ProductList from './ProductList'
import CartList from './CartList'
import Headers from './Headers'

const CartApp = () => {
    return (
        <CartProvider>
            <div className='app'>
                <Headers/>
                    <main>
                        <ProductList/>
                        <CartList/>
                    </main>

             

            </div>
        </CartProvider>

    )
}

export default CartApp
