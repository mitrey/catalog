import React from 'react';
import './Search.css';
import { ReactComponent as SearchIcon } from '../../icons/icon-search.svg';
import Input from '../Input';

const Search = ({ query, onSearch, onReset }) => {
    return (
        <div className="search">
            <Input value={query} onChange={onSearch} placeholder="Search questions..." />
            <SearchIcon className="search__icon" />
        </div>
    );
};

export default Search;
