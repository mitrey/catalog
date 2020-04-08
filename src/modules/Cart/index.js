import { lazy } from 'react';
import reducer from './redux';

const Cart = lazy(() => import('./pages/CartList'));

export default {
    name: 'Cart',
    routeProps: {
        path: '/cart',
        component: Cart,
    },
    redux: {
        reducer,
        key: 'cart'
    }
};
