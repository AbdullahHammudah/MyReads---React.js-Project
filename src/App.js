import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {

  render() {
    return (
      <div>
        <Home>
          <BookShelf>
            <Book>
              <BookSelector />
            </Book>
          </BookShelf>
        </Home>
        <Search>
          <GoToHmoe />
          <SearchBar />
          <SearchResult>
            <Book>
              <BookSelector />
            </Book>
          </SearchResult>
        </Search>
      </div>

    )
  }
}

export default BooksApp
