import React from 'react'
import './SearchInput.scss'

export const SearchInput = (props) => {
    const {value, onChanging, onClicked, refreshArray} = props
    return (
        <div className='search-input-wrapper' >
            <input value={value} onChange={onChanging} placeholder='Search by name of product' className='search-input'/>
            <button onClick={onClicked} className='search-button'>Search</button>
            <button onClick={refreshArray} className='search-button'>Refresh</button>
        </div>
    )
}
