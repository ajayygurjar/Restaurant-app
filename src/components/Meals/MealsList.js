import classes from './MealsList.module.css'
import MealForm from './MealForm';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

const MealsList=()=>{

    return <div className={classes.container}><ul>
        {DUMMY_MEALS.map(meal=><li className={classes.item} key={meal.id}>{meal.name}: {meal.description} (${meal.price}) <MealForm/>  </li>)}
    </ul>
    </div>
}

export default MealsList