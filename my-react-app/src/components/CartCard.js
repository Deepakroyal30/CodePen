import './CartCard.css'
import React from 'react'

const CartCard = ({name, price, quatitySelected}) => {
  return (
    <div className='cart_card'>
        <p>{name}</p>
        <p>{quatitySelected} x {price}</p>
    </div>
  )
}

export default CartCard