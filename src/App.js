import React from "react";
import { BrowserRouter, Route ,Switch} from "react-router-dom";

import VendingMachine from './VendingMachine';
import Chips from './Chips';
import Cola from './Cola';
import Cookie from './Cookie';


import './App.css';


function App() {
  return (
    <div className="App">
         <BrowserRouter>
                <h1>Vending Machine</h1>
                <Switch>
                  <Route exact path = "/">
                    <VendingMachine/>
                  </Route>
                  <Route exact path ="/chips">
                      <Chips />
                  </Route>
                  <Route exact path ="/cola">
                      <Cola />
                  </Route>
                  <Route exact path ="/cookie">
                      <Cookie />
                  </Route>
                </Switch>
            </BrowserRouter>
    </div>
  );
}

export default App;
