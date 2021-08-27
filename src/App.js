import React from 'react'
import { Route, Switch } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
//import * as BookAPI from './BookAPI'
import Home from './Home'
import Search from './Search'
import './App.css'

class BooksApp extends React.Component {
  render() {
    const books = [{
      id: '1',
      title: 'hoefh',
      author: 'dobykh'
    }]
    return (
      <div>
        <Switch>
          <Route
            exact path='/'
            render={() => (
              <Home books={books} />
            )}
          />
          <Route
            path='/search'
            component={Search}
          />
        </Switch>
      </div>

    )
  }
}

export default BooksApp
