import BookSelector from "./BookSelector"

const Search = (props) => {
    return (
        <div>
            <GoToHome />
            <SearchBar />
            <SearchResult>
                <Book>
                    <BookSelector />
                </Book>
            </SearchResult>
        </div>

    );
}

export default Search;