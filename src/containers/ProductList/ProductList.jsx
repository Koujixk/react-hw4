import React from 'react'
import { ProductItem } from '../../components/ProductItem/ProductItem'
import data from '../../components/data/data'
import './ProductList.scss'
import { useState } from 'react'
import { ProductModal } from '../../components/ProductModal/ProductModal'

export const ProductList = () => {
  const [currentProduct, setCurrentProduct] = useState('')
  const [isModalActive, setIsModalActive] = useState(true)
  const setProduct = (product) => {
    setCurrentProduct(product)
    setIsModalActive(true)
  }
  return (
    <div>
        <div className='product-list'>
          {data.map((product) => {
            return <ProductItem key={product.id} product={product} onClicked={() => setProduct(product)}/>
          })}
        </div>
        {currentProduct &&
          <ProductModal active={isModalActive} setActive={setIsModalActive} currentProduct={currentProduct}/>
        }
      
    </div>
  )
}
