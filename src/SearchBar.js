import React, { Component } from 'react';

import GoToHome from './GoToHome';
import SearchResult from './SearchResult';
import * as BooksAPI from './BooksAPI';

class SearchBar extends Component{
    state = {
        query:'',
        books:[]
    }

    //Ignore this comment please
    /*searchedBooks(query){
        BooksAPI.search(query).then(books=> this.setState({
            books:books
        }))
    }

    updateQuery = (evt) => {
        const query = evt.target.value;
        this.setState({query})

        this.searchedBooks(query)
    }*/

    updateQuery = evt => {
        const query = evt.target.value;
        this.setState({ query });
    
        if (query) {
          BooksAPI.search(query.trim()).then(books => {
            books.length > 0
              ? this.setState({ books: books })
              : this.setState({ books: [] });
          });
    
        } else this.setState({ books: []});
      };


    render(){
        
        console.log(this.state.query)
        return (
            <div>
                <div className="search-books-bar">
                    <GoToHome />
                    <div className="search-books-input-wrapper">
                        <input 
                            type="text" 
                            placeholder="Search by title or author"
                            value={this.state.query} 
                            onChange={this.updateQuery}
                        />
                    </div>
                </div>
                <div>
                    <SearchResult
                        query={this.state.query}
                        books={this.state.books}
                    />
                </div>
            </div>

        );
    }
}

export default SearchBar;