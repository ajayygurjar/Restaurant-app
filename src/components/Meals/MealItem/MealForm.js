

import classes from './MealForm.module.css'

const MealForm=()=>{
    const handleAddingButton=(e)=>{
        e.preventdefault()

    }
    return(
        <form onClick={handleAddingButton}>
            <label htmlFor="amount">Amount</label>
            <input type="number" value={1}></input>
            <button className={classes.button} >Add</button>
        </form>
    )
}



export default MealForm;