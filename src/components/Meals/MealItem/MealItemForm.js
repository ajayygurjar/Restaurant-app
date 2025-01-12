import Input from '../../UI/Input'

import classes from './MealItemForm.module.css'

const MealItemForm=(props)=>{
    const handleAddingButton=(e)=>{
        e.preventdefault()

    }
    return(
        <form className={classes.form} onClick={handleAddingButton}>
            <Input label='Amount' input={{
                id:"amount",
                type:'number',
                min:'1',
                max:'5',
                defaultValue:'1',
            }} />
            <button >+Add</button>
        </form>
    )
}



export default MealItemForm;