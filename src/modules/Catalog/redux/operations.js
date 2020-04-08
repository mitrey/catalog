import { database } from '../../../firebase';
import * as actions from './actions';

const dbRef = database.ref('/products');

export const getProductsList = countryId => dispatch => {
    dispatch(actions.getProductsListLoading());

    dbRef
        .orderByChild('countryId')
        .equalTo(countryId)
        .once('value')
        .then(snapshot => {
            if (snapshot.val()) {
                dispatch(actions.getProductsListSuccess(snapshot.val()));
            }
        });
};

export const addProduct = (countryId, product) => (dispatch, getState) => {
    dbRef.push({ ...product, countryId });
};

export const getProduct = productId => (dispatch, getState) => {
    dispatch(actions.getProductLoading());
    database
        .ref(`/products/${productId}`)
        .once('value')
        .then(snapshot => {
            if (snapshot.val()) {
                dispatch(actions.getProductSuccess(productId, snapshot.val()));
            }
        });
};
