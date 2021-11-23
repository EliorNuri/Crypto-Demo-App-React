import React from 'react';
import { HiOutlineSearch } from "react-icons/hi";


function SearchInput() {
    return (
        <div className="search-input-container flex row center">
            <span className="icon-wrapper">
                <HiOutlineSearch />
            </span>
            <input placeholder="Search Cryptocurrency, News, etc..." type="text" />
        </div>
    )
}

export default SearchInput
