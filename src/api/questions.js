import { database } from '../firebase';

export const addQuestion = (countryId, data) => {
    return database.ref(`/countries/${countryId}/questions`).push(data);
};

export const deleteQuestion = (countryId, id) => {
    return database.ref(`/countries/${countryId}/questions/${id}`).remove().key;
};
