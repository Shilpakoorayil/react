import React from 'react'
import './ProductCard.css';

const ProductCard = ({products}) => {
  return (
    <div className='products=card'>
        {products.offer && <span className='offer-badge'>{products.offer}% OFF</span>}

        <div className='product-image-area'>
            <img src={products.image} alt="" />


        </div>
        <p className='product-category'>{products.category}</p>
        <h3 className='product-title'>{products.title}</h3>

        <div className='product-rating'>
            {[...Array(5)].map((_,i)=>(
            <span key={i} className={i < products.rating ? "star filled" : "star"}>
                ★
            </span>

           ) )}

        </div>
      
    </div>
    
  )
}

export default ProductCard
