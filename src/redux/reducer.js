import { combineReducers } from 'redux';

import modules from '../modules';

const appReducer = combineReducers(
    Object.values(modules).reduce((acc, m) => {
        acc[m.redux.key] = m.redux.reducer;
        return acc;
    }, {})
);

export default appReducer;
