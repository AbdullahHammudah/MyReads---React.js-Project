import React, { Component } from "react";
import Book from "./Book";

const SearchResult = (props) => {
    return (
        <div className="search-books-results">
            <ol className="books-grid">
                <Book />
            </ol>
        </div>
    );
}

export default SearchResult;