import React, { Component } from 'react'

import BookSelector from "./BookSelector"
import GoToHome from "./GoToHome";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";
import Book from './Book';

const Search = (props) => {
    return (
        <div>
            <SearchBar />
            <GoToHome />
            <SearchResult>
                <Book />
            </SearchResult>
        </div>

    );
}

export default Search;