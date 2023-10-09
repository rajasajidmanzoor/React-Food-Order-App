import React from 'react'

import Modal from '../UI/Modal'
import classes from './Cart.module.css'

const Cart = (props) => {
    const cartItems = [{
        id: 'c123',
        name: 'Sussie',
        amount: 2,
        price: 6.99,
        
    }]
    var c_items = cartItems.map(item => {
        return <li> {item.name} </li>;
    });
  return (
    <Modal onModalClose={props.onClose} >
        <ul className={classes['cart-items']}>
            {c_items}
        </ul>
        <div className={classes.total}> 
            <span> Total Amount</span>
            <span> 35.62 </span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}> Close </button>
            <button className={classes.button}> Order </button>
        </div>
    </Modal>
    
  )
}

export default Cart