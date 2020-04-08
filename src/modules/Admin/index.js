import { lazy } from 'react';
import reducer from './redux';

const Admin = lazy(() => import('./pages/Dashboard'));

export default {
    name: 'Admin',
    routeProps: {
        path: '/admin',
        component: Admin,
    },
    redux: {
        reducer,
        key: 'admin'
    }
};
