import React from 'react'
import {
  Switch,
  Route,
  Link
} from 'react-router-dom'

import './App.css'
import BookmarksList from './bookmark-list/bookmark-list'
import NewBookmark from './new-link/new-bookmark'

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Bookmarks</Link>
        <Link to="/newBookmark">New bookmark</Link>
      </nav>

      <Switch>
        <Route exact path="/">
          <BookmarksList></BookmarksList>
        </Route>
        <Route path="/newBookmark">
          <NewBookmark></NewBookmark>
        </Route>
      </Switch>
    </div>
  )
}

export default App
