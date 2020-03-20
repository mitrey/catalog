import { database } from '../firebase';

export const addAnswer = (countryId, questionId, data) => {
    return database
        .ref(`/countries/${countryId}/questions/${questionId}/answers`)
        .push(data);
};
export const deleteAnswer = (countryId, questionId, answerId) => {
    return database
        .ref(
            `/countries/${countryId}/questions/${questionId}/answers/${answerId}`
        )
        .remove();
};
