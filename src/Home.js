import React, { Component } from 'react';
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
                    books={props.books.filter((book) => (
                        book.shelf === 'currentlyReading'
                    ))}
                />
                <BookShelf
                    title='Want To Read'
                    books={props.books.filter((book) => (
                        book.shelf === "wantToRead"
                    ))}
                />
                <BookShelf
                    title='Read'
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