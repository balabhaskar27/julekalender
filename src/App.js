import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import Forside from './Forside';
import Luke from './Luke';
import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <div className="main-container">
          <Switch>
            <Route exact path="/">
              <Forside />
            </Route>
            <Route path="/luke/:nr" component={props => <Luke nr={props.match.params.nr} />}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
