import React, { Component } from "react";
import Book from "./Book";
import * as BooksAPI from './BooksAPI'

class SearchResult extends Component{
    render(){
        console.log(this.props.books)
        return (
            <div className="search-books-results">
                <ol className="books-grid">
                    {this.props.query && this.props.books.map((book) => (
                        <li key={book.id}>
                            <Book 
                                book={book}
                                updateTheShelf={this.props.updateTheShelf}
                            />
                        </li>
                    ))}
                </ol>
            </div>
        );
    }
}

export default SearchResult;