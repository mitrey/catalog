import React from 'react';
import { Link } from 'react-router-dom';
import Flag from 'react-world-flags'
import './CountriesList.css';

const CountriesList = ({ countries }) => (
    <div className="countries-list">
        {countries.map(c => (
            <Link key={c.id} to={`/${c.id}`}>
                <div className="countries-list__item">
                    <Flag code={c.countryCode} height={24} fallback={<span>not found</span>} />
                    {c.name}
                </div>
            </Link>
        ))}
    </div>
);

export default CountriesList;
