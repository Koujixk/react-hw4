import React from 'react'
import { ProductItem } from '../../components/ProductItem/ProductItem'
import data from '../../components/data/data'
import './ProductList.scss'
import { useState } from 'react'
import { ProductModal } from '../../components/ProductModal/ProductModal'
import { SearchInput } from '../../components/SearchInput/SearchInput'

export const ProductList = () => {
  const [currentProduct, setCurrentProduct] = useState('')
  const [isModalActive, setIsModalActive] = useState(true)
  const [searchValue, setSearchValue] = useState('')
  const [filteredProducts, setFilteredProducts] = useState(data)
  const setProduct = (product) => {
    setCurrentProduct(product)
    setIsModalActive(true)
  }
  const setSearchCondition = (inputValue) => {
    setSearchValue(inputValue)
  }
  const searchProdcuts = () => {
    const filteredArray = data.filter((product)=>product.title.toLowerCase().includes(searchValue.toLowerCase()))
    setFilteredProducts(filteredArray)
    setSearchValue('')
  }
  const refreshArray = () => {
    setFilteredProducts(data)
  }
  return (
    <div>
      <SearchInput value={searchValue} onChanging={(e) => setSearchCondition(e.target.value)} onClicked={searchProdcuts} refreshArray={refreshArray}/>
        <div className='product-list'>
          {filteredProducts.map((product) => {
            return <ProductItem key={product.id} product={product} onClicked={() => setProduct(product)}/>
          })}
        </div>
        {currentProduct &&
          <ProductModal active={isModalActive} setActive={setIsModalActive} currentProduct={currentProduct}/>
        }
      
    </div>
  )
}
