import React from 'react'
import classes from './Modal.module.css'
import { ReactDOM } from 'react'
const ModalOverlay=(props)=>{
    return <div className={classes.overlay}>
            <div className={classes.content}>{props.children}</div>

    </div>

        }
        const Backdrop=(props)=>{
         return   <div className={classes.backdrop}></div>
        }
        const portalElemet =document.getElementById('modal-overlay"')

export default function Modal() {
  return (
    <React.Fragment>
   {ReactDOM.createPortal(<Backdrop></Backdrop>,portalElemet)}
   {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElemet)}

   </React.Fragment>
  )
}
