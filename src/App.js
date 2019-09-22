import React from 'react';
import {Switch, Route} from 'react-router-dom';
//import './App.css';

import HomePage from './Pages/homepage';

//npm install -g sass

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} /> {/*exact is basically exact={true} */}
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
