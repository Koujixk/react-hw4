import React from 'react'
import { ProductItem } from '../../components/ProductItem/ProductItem'
import Data from '../../components/Data/Data'
import './ProductList.scss'
import { useState } from 'react'
import { ProductModal } from '../../components/ProductModal/ProductModal'

export const ProductList = () => {
  const [currentProduct, setCurrentProduct] = useState(null)
  const [isModalActive, setIsModalActive] = useState(true)
  const setProduct = (product) => {
    setCurrentProduct(product)
    setIsModalActive(true)
    console.log('product', product)
  }
  return (
    <div className='product-list'>
      {currentProduct && <ProductModal active={isModalActive} setActive={setIsModalActive} currentProduct={currentProduct}/>}
      {Data.map((product) => {
        return <ProductItem product={product} onClicked={() => setProduct(product)}/>
      })}

    </div>
  )
}
