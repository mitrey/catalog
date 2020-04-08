import { database } from '../../../firebase';
import * as actions from './actions';

export const addCountry = data => dispatch => {
    return database.ref('/countries').push(data);
};

export const loadCountries = () => dispatch => {
    dispatch(actions.setCountriesLoading());
    database
        .ref('/countries')
        .once('value')
        .then(function(snapshot) {
            const val = snapshot.val();
            if (val) {
                dispatch(actions.setCountriesSuccess(val));
            }
        })
        .catch(e => dispatch(actions.setCountriesFailed()));
};

export const deleteCountry = id => dispatch => {
    dispatch(actions.setCountriesLoading());
    database.ref(`/countries/${id}`).remove();
};

export const updateCountry = (id, data) => dispatch => {
    console.log('updates', data);

    database.ref(`/countries/${id}/`).update(data);
};
