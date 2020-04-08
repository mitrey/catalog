import * as types from './types';

const initialState = {
    isLoading: true,
    list: {},
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CLEAR_CATALOG:
            return initialState;

        case types.GET_PRODUCT__LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case types.GET_PRODUCT__SUCCESS:
            return {
                ...state,
                isLoading: false,
                list: {
                    ...state.list,
                    [action.payload.id]: action.payload,
                },
            };

        case types.GET_PRODUCTS_LIST__LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case types.GET_PRODUCTS_LIST__SUCCESS:
            return {
                ...state,
                isLoading: false,
                list: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
