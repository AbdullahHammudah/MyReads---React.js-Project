import React from 'react'
import { Route, Switch } from 'react-router-dom'
import * as BooksAPI from './BooksAPI';
import Home from './Home'
import Search from './Search'
import './App.css'
import SearchBar from './SearchBar';

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

  /*updateTheShelf = (book,shelf)=>{
    const newBooks= this.state.books.map((b)=>{
      if(b === book){
        b.shelf = shelf}

        this.setState({books: newBooks})
    })
  }*/
  updateTheShelf = (book,shelf)=>{
    this.setState((state)=>{
      state.books.map((b)=>{
        if (b === book){
          b.shelf = shelf 
        }
      })
    })
  }

  render() {
    return (
      <div>
        <Switch>
          <Route
            exact path='/'
            render={() => (
              <Home 
                books={this.state.books}
                updateTheShelf={this.updateTheShelf}
              />
            )}
          />
          <Route
            path='/search'
            render={() => (
              <SearchBar 
                books={this.state.books}
                updateTheShelf={this.updateTheShelf}
              />
            )}
          />
        </Switch>
      </div>
    )
  }
}

export default BooksApp
