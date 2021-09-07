import React from 'react';
import { Link } from 'react-router-dom';

import BookShelf from "./BookShelf";

const Home = (props) => {
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <BookShelf
                    title='Currently Reading'
                    updateTheShelf = {props.updateTheShelf}
                    books={props.books.filter((book) => (
                        book.shelf === 'currentlyReading'
                    ))}
                />
                <BookShelf
                    title='Want To Read'
                    updateTheShelf = {props.updateTheShelf}
                    books={props.books.filter((book) => (
                        book.shelf === "wantToRead"
                    ))}
                />
                <BookShelf
                    title='Read'
                    updateTheShelf = {props.updateTheShelf}
                    books={props.books.filter((book) => (
                        book.shelf === 'read'
                    ))}
                />
            </div>
            <div className="open-search">
                <Link to='/search'>
                    <button>Add a book</button>
                </Link>
            </div>
        </div>
    );
}

export default Home;