import { Fragment,useState } from 'react';
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
  const[cartState,setCartState] =useState(false)

  const onCartClick=()=>{
    setCartState(prevState=>!prevState);
  }
  
  return (
    <Fragment>
      {cartState && <Cart onCartClick={onCartClick}/>}
      <Header onCartClick={onCartClick}/>
      <main><Meals/></main> {/* meals component should be used outside of header or  after header */}
    </Fragment>
  );
}

export default App;
