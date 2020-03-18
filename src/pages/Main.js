import React, { useState, useEffect } from 'react';
import CountriesList from '../components/CountriesList';
import { database } from '../firebase';
import Loader from '../components/Loader';
import Title from '../components/Title';

const Main = () => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);

  console.log('countries', countries);

  useEffect(() => {
        database
            .ref('/countries')
            .once('value')
            .then(function(snapshot) {
                setLoading(false);
                const val = snapshot.val();
                if (val) {
                    setCountries(
                        Object.keys(val).map(id => {
                            return { ...val[id], id };
                        })
                    );
                }
            });
    }, []);

    return (
        <div>
            <Title centered text="Choose a country you are stuck in" />
            {loading && <Loader />}
            <CountriesList countries={countries} />
        </div>
    );
};

export default Main;
