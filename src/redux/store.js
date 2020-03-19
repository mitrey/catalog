import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import * as types from './types';
const initialState = {
    countries: {},
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_COUNTRIES__LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case types.SET_COUNTRIES__SUCCESS:
            return {
                ...state,
                countries: action.payload,
                isLoading: false,
            };
        case types.SET_COUNTRIES__FAILED:
            return {
                ...state,
                isLoading: false,
            };
        default:
            return state;
    }
};

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
