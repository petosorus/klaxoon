import React from 'react';
import {
  Switch,
  Route,
  Link
} from 'react-router-dom';

import './App.css';
import LinksList from './links-list/links-list';
import NewLink from './new-link/new-link';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">root</Link>
        <Link to="/newLink">new link</Link>
      </nav>

      <Switch>
        <Route exact path="/">
          <LinksList></LinksList>
        </Route>
        <Route path="/newLink">
          <NewLink></NewLink>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
