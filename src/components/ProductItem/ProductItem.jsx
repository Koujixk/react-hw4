import React from 'react'
import './ProductItem.scss'

export const ProductItem = (props) => {
    const {product, onClicked} = props
  return (
    <div className='table-row' key={product.title} onClick={onClicked}> 
        <div className="product-title">{product.title}</div>
        <div className="product-category">{product.category}</div>
        <div className="product-image"><img src={product.image} alt="" /></div>
    </div>
  )
}
