import { Fragment } from 'react';
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <Fragment>
      <Cart/>
      <Header/>
      <main><Meals/></main> {/* meals component should be used outside of header or  after header */}
    </Fragment>
  );
}

export default App;
