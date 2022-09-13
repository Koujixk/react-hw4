import React from 'react'
import { ProductItem } from '../../components/ProductItem/ProductItem'
import Data from '../../components/Data/Data'
import './ProductList.scss'

export const ProductList = () => {
  console.log("data", Data)
  return (
    <div className='product-list'>
      {Data.map((product) => {
        return <ProductItem product={product}/>
      })}
    </div>
  )
}
