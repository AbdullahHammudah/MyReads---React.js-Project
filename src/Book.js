import { checkPropTypes } from "prop-types";
import React, { Component } from "react";
import BookSelector from "./BookSelector";

const Book = (props) => {
    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${props.book.imageLinks.thumbnail})` }}></div>
                <BookSelector 
                    book = {props.book}
                    updateTheShelf = {props.updateTheShelf}
                />
            </div>
            <div className="book-title">{props.book.title}</div>
            <div className="book-authors">{props.book.authors}</div>
        </div>

    );
}

export default Book;