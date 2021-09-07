import React, { Component } from "react";
import * as BooksAPI from './BooksAPI';

class BookSelector extends Component {
    
    handelChange = (evt) =>{
        const selector = evt.target.value;

        this.props.updateTheShelf(this.props.book,selector)

        BooksAPI.update(this.props.book, selector)

    }

    render(){
        return (
            <div className="book-shelf-changer">
                <select 
                    defaultValue={'none'}
                    value={this.props.book.shelf}
                    onChange={this.handelChange}
                >
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        );
    }
}

export default BookSelector;