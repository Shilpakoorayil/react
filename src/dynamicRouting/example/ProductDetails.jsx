import React from 'react'
import './ProductDetails.css'
import { useParams } from 'react-router-dom'
import { products } from './Data/Product'

const ProductDetails = () => {

  const { id } = useParams();
  
  const newproduct = products.find(p => p.id === Number(id))
  console.log(id);


  if (!newproduct) {
    return <h2 style={{ textAlign: 'center' }}>Products Not Found!</h2>
  }

  return (
    <div className='details-container'>

      {/* left */}
      <div className=''>
        <img
          src={newproduct.image}
          alt={newproduct.title}
          className='details-image'
        />

        <div className='details-thumbnails'>
          {newproduct.gallery?.map((img, i) => (
            <img key={i} src={img} className='details-thumb' />
          ))}
        </div>

      </div>

      {/* right */}
      <div>
        <h1 className='details-title'>{newproduct.title}</h1>
        <div className='details-rating'>
          {[...Array(5)].map((_, i) => (
            <span key={i} className={i < newproduct.rating ? "star filled" : "star"}>
              ★
            </span>
          ))}
        </div>

        <p className='details-description'>{newproduct.description}</p>

        <div className='details-price-row'>
          <span className='details-new-price'>
            {newproduct.price}
          </span>
          {newproduct.oldPrice && (
            <span className='details-old-price'>
              ₹{newproduct.oldPrice}
            </span>
          )}
        </div>

        <button className='details-btn'>Add To Cart</button>

      </div>

    </div>
  )
}

export default ProductDetails