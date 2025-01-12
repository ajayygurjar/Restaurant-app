import { Fragment } from "react";
import classes from './Modal.module.css'
import ReactDOM from 'react-dom';


const BackDrop=(props)=>{
return <div className={classes.backdrop}></div>
}

const Overlays=(props)=>{
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children} </div>
    </div>
}

const portalElement=document.getElementById('overlays'); 
//storing address in an variable (evaluated expression) 

const Modal=props=>{
    return(
    <Fragment>
        {ReactDOM.createPortal(<BackDrop/>, document.getElementById('overlays'))}
        {ReactDOM.createPortal(<Overlays>{props.children}</Overlays>,portalElement)}
    </Fragment>
    )
}


export default Modal;