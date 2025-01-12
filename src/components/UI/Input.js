import classes from './Input.module.css'

const Input=props=>{

    return (
    <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input id={props.input.id} {...props.input}  />  
        {/* props.input.id will recieve the type of input created in the parent component where it is  used */}
    </div>
    )
}

export default Input;