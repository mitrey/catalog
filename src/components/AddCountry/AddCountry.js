import React, { useState } from 'react';
import { database } from '../../firebase';

const AddCountry = () => {
    const [countryName, setCountryName] = useState('');
    const handleSaveCountry = () => {
        database.ref('/countries').push({ name: countryName });
        setCountryName('');
    };

    return (
        <div>
            <input
                type="text"
                onChange={e => setCountryName(e.target.value)}
                value={countryName}
            />
            <button onClick={handleSaveCountry}>Save</button>
        </div>
    );
};

export default AddCountry;
