import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: 'AIzaSyCeEPZe_KPjnJMLfU4d5w6sJB_ipsyK884',
    authDomain: 'stucked-with-covid.firebaseapp.com',
    databaseURL: 'https://stucked-with-covid.firebaseio.com',
    projectId: 'stucked-with-covid',
    storageBucket: 'stucked-with-covid.appspot.com',
    messagingSenderId: '185375861184',
    appId: '1:185375861184:web:ffbeb6772f88c78df50025',
    measurementId: 'G-31DTB51D3N',
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
// export const storage = firebase.storage();
// export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
// export const messaging = firebase.messaging();

