import React from 'react'
import './ProductModal.scss'

export const ProductModal = (props) => {
    const {currentProduct, active, setActive} = props
    console.log('currrent', currentProduct)
  return (
    <div className = {active ? "modal active" : "modal"} onClick={() => setActive(false)}>
        <div className="modal-content" onClick={(e)=>e.stopPropagation()}> 
            <img src={currentProduct.image} className="modal-img"></img>
            <p className="product-title">{currentProduct.title}</p>
                <div className="modal-text">
                    <p className="product-description">{currentProduct.description}</p>
                    <p className="product-category">{currentProduct.category}</p>
                    <p className="product-price">Price:{currentProduct.price}$</p>
                </div>  
            <img src="https://cdn-icons-png.flaticon.com/512/1828/1828778.png" alt="" className="close-button" onClick={() => setActive(false)}/>
        </div>
    </div>    
  )
}
