import React, { useEffect } from 'react';
import { useParams, useRouteMatch, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProductsList } from '../../redux/operations';
import ProductCard from '../../../../components/ProductCard';

const List = ({ getProductsList, isLoading, list }) => {
    const { countryId } = useParams();
    const { url } = useRouteMatch();

    useEffect(() => {
        getProductsList(countryId);
    }, [getProductsList, countryId]);

    return isLoading ? (
        <div>loading</div>
    ) : (
        <div>
            {Object.keys(list).map(id => (
                <Link to={`${url}/${id}`} key={id}>
                    <ProductCard {...list[id]} />
                </Link>
            ))}
        </div>
    );
};

export default connect(
    state => ({
        isLoading: state.catalog.isLoading,
        list: state.catalog.list,
    }),
    {
        getProductsList,
    }
)(List);
