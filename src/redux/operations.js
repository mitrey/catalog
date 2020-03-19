import { database } from '../firebase';
import * as actions from './actions';

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
