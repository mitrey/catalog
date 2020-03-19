import React from 'react';
import { connect } from 'react-redux';

import BaseTemplate from '../templates/BaseTemplate';
import CountriesList from '../components/CountriesList';
import Loader from '../components/Loader';
import AddCountry from '../components/AddCountry/AddCountry';
import useAuth from '../auth/useAuth';

import './Main.css';

const Main = ({ countries, isLoading }) => {
    const { isAdmin } = useAuth();

    return (
        <BaseTemplate
            header={
                <div className="promo">
                    <div className="promo-title">Choose a country</div>
                    <div className="promo-sub-title">You are stuck in</div>
                    <span>
                        Millions of people stuck in foreign countries due to
                        flights cancellations and closed borders. We've
                        developed this website to allow people get answers to
                        frequently asked questions about how to get home or what
                        is going on. You can discover a lot of information about
                        situation in country you are currently stuck in.{' '}
                        <p>
                            <b>
                                Ask a question if you can't find useful
                                information
                            </b>
                        </p>
                    </span>
                </div>
            }
            content={
                <>
                    {isAdmin && <AddCountry />}
                    {isLoading && <Loader />}
                    <CountriesList
                        countries={Object.keys(countries).map(id => {
                            return { ...countries[id], id };
                        })}
                    />
                </>
            }
        />
    );
};

export default connect(state => ({
    isLoading: state.isLoading,
    countries: state.countries,
}))(Main);
