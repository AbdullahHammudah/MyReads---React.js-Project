import React from 'react'
import { Route, Switch } from 'react-router-dom'
import * as BooksAPI from './BooksAPI';
import Home from './Home'
import Search from './Search'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }
  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => (console.log(books), this.setState({
        books: books
      })))
  }
  render() {
    return (
      <div>
        <Switch>
          <Route
            exact path='/'
            render={() => (
              <Home books={this.state.books} />
            )}
          />
          <Route
            path='/search'
            render={() => (
              <Search books={this.state.books} />
            )}
          />
        </Switch>
      </div>
    )
  }
}

export default BooksApp
