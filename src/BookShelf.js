import React from "react";
import Book from "./Book";

const BookShelf = (props) => {
    return (
        <div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">{props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {props.books.map((book) => (
                            <li key={book.id}>
                                <Book book={book}
                                    updateTheShelf = {props.updateTheShelf}
                                />
                            </li>
                        ))
                        }
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default BookShelf;