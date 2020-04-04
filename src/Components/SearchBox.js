import React from 'react';

const SearchBox = ({onSearch}) => {
    return (
        <>
            <input type="search" placeholder="Type something..." onChange={onSearch}/>
        </>
    );
}

export default SearchBox;