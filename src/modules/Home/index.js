import { lazy } from 'react';
import reducer from './redux';

const Home = lazy(() => import('./pages/Home'));

export default {
  name: 'Home',
  routeProps: {
    path: '/',
    exact: true,
    component: Home,
  },
  redux: {
    reducer,
    key: 'countries'
  }
};