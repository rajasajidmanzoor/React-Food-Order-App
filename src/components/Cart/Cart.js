import React from 'react'

import classes from './Cart.module.css'

const Cart = (props) => {
    const cartItems = [{
        id: 'c123',
        name: 'Sussie',
        amount: 2,
        price: 6.99,
        
    }]
    cartItems = cartItems.map(item => {
        return <li> {item.name} </li>;
    });
  return (
    <div>
        <ul className={classes['cart-item']}>
            {cartItems}
        </ul>
        <div className={classes.total}> 
            <span> Total Amount</span>
            <span> 35.62 </span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']}> Close </button>
            <button className={classes.button}> Order </button>
        </div>
    </div>
    
  )
}

export default Cart