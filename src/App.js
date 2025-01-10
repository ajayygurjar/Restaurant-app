import { Fragment } from 'react';
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals';

function App() {
  return (
    <Fragment>
      <Header/>
      <main><Meals/></main> {/* meals component should be used outside of header or  after header */}
    </Fragment>
  );
}

export default App;
