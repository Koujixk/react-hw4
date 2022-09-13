import React from 'react'
import './ProductItem.scss'

export const ProductItem = (props) => {
    const {product} = props
    console.log(product)
  return (
    <div className='table-row' key={product.title}> 
            <div className="product-title">{product.title}</div>
            <div className="product-category">{product.category}</div>
            <div className="product-image"><img src={product.image} alt="" /></div>
    </div>
  )
}
