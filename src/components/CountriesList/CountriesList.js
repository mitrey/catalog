import React from 'react';
import { Link } from 'react-router-dom';
import Flag from 'react-world-flags';
import './CountriesList.css';

const CountriesList = ({ countries }) => (
    <div className="countries-list">
        {countries.map(({ id, countryCode, name }) => (
            <Link key={id} to={`/${id}`} className="countries-list__item">
                <Flag
                    code={countryCode}
                    height={24}
                    fallback={<span>not found</span>}
                />
                <span className="country__name">{name}</span>
            </Link>
        ))}
    </div>
);

export default CountriesList;
