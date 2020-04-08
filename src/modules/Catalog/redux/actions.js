import * as types from './types';

export const getProductsListLoading = () => ({
    type: types.GET_PRODUCTS_LIST__LOADING,
});
export const getProductsListSuccess = data => ({
    type: types.GET_PRODUCTS_LIST__SUCCESS,
    payload: data,
});

export const getProductLoading = () => ({
    type: types.GET_PRODUCT__LOADING,
});
export const getProductSuccess = (id, product) => ({
    type: types.GET_PRODUCT__SUCCESS,
    payload: { id, ...product },
});
