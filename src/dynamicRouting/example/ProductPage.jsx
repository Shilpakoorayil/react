import React from 'react'
import './ProductPage.css'
import { Link } from 'react-router-dom'
import ProductCard from './ProductCard'
import { products } from './Data/Product'

const ProductPage = () => {
  return (
    <div className='products-container'>
        <h2 className='section-title'>
            Special Footwear with offers
        </h2>
        <p className='section-subtitle'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea enim reprehenderit sequi? Adipisci non, minus perferendis ratione sit exercitationem. Ab ratione quisquam autem exercitationem aspernatur. Similique, vel. Quasi, illo numquam.
          </p>

          <div className='products-grid'>
            {products.map((item)=> (
                <Link key={item.id} to= {`/product/${item.id}`} style={{textDecoration:'none'}}>
                    <ProductCard products={item}/>
                </Link>
            ))}
          </div>
      
    </div>
  )
}

export default ProductPage
