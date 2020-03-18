import React from 'react';
import './Search.css';
import Input from '../Input';

const Search = ({ query, onSearch, onReset }) => {
    return (
        <div className="search">
            <Input value={query} onChange={e => onSearch(e.target.value)} />
        </div>
    );
};

export default Search;
