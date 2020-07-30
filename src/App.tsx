import React from 'react';
import {
  Switch,
  Route,
  Link
} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">root</Link>
        <Link to="/newLink">new link</Link>
      </nav>

      <Switch>
        <Route exact path="/">
          Root
        </Route>
        <Route path="/newLink">
          New link
        </Route>
      </Switch>
    </div>
  );
}

export default App;
