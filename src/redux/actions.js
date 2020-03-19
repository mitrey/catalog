import * as types from './types';

export const setCountriesLoading = () => ({
    type: types.SET_COUNTRIES__LOADING,
});
export const setCountriesSuccess = countries => ({
    type: types.SET_COUNTRIES__SUCCESS,
    payload: countries,
});
export const setCountriesFailed = () => ({
    type: types.SET_COUNTRIES__FAILED,
});
