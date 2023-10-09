import React from 'react'
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

const BackDrop = (props) => {
  return (
    <div onClick={props.onModalClose} className={classes.backdrop} /> 
  )
}
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
        <div className={classes.content}> 
            {props.children}
        </div>
    </div>
  )
}
const Modal = (props) => {
    const portalElement = document.getElementById('overlays');

  return (
    <>
        {ReactDOM.createPortal(<BackDrop onModalClose={props.onModalClose}/>, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        <BackDrop/>
        
    </>
  )
}

export default Modal