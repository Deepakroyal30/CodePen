import React from 'react'
import './ProductCard.css'

const ProductCard = ({name, price, id, quatitySelected, dispatch}) => {
  return (
    <div className='product_card'>
        <p className='product_name'>{name}</p>
        <p className='product_price'>{price}</p>
        <div className='product_count_cntrl'>
            <p className='btn' onClick={()=>{
                dispatch({type:"decrease", payLoad: id});
            }}>-</p>
            <p>{quatitySelected}</p>
            <p className='btn' onClick={()=>{
                dispatch({type:"increase", payLoad: id});
            }}>+</p>
        </div>
    </div>
  )
}

export default ProductCard