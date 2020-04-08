import { lazy } from 'react';
import reducer from './redux';

const User = lazy(() => import('./pages/UserPage'));

export default {
    name: 'User',
    routeProps: {
        path: '/user',
        component: User,
    },
    redux: {
        reducer,
        key: 'user',
    },
};
