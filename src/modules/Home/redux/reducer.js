import * as types from "./types";

const initialState = {
    list: {},
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_COUNTRY:
            return {
                ...state,
                selectedCountryId: action.payload,
            };
        case types.SET_COUNTRIES__LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case types.SET_COUNTRIES__SUCCESS:
            return {
                ...state,
                list: action.payload,
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

export default reducer;
