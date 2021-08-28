import React, { Component } from 'react'

import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";

class Search extends Component{
    render(){
        return (
            <div>
                <SearchBar />
            </div>
        );
    }
}

export default Search;