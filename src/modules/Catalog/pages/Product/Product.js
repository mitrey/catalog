import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import * as operations from '../../redux/operations';

const Product = ({ getProduct, isLoading, product }) => {
    const { productId } = useParams();

    useEffect(() => {
        if (!product) {
            getProduct(productId);
        }
    }, [product, getProduct, productId]);

    return isLoading ? (
        <div>loading</div>
    ) : (
        <div>
            <h1>{product.title}</h1>
            <div>{product.price}s</div>
        </div>
    );
};

export default connect(
    (state, ownProps) => ({
        isLoading: state.catalog.isLoading,
        product: state.catalog.list[ownProps.match.params.productId],
    }),
    { getProduct: operations.getProduct }
)(Product);
