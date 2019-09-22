import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from './Pages/homepage';
import ShopPage from './Pages/shop/shop.jsx';
import Header from './Components/Header/Header';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} /> {/*exact is basically exact={true} */}
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
};

export default App;
