import { lazy } from 'react';
import reducer from './redux';

const Catalog = lazy(() => import('./pages/List'));

export default {
  name: 'Catalog',
  routeProps: {
    path: '/catalog',
    component: Catalog,
  },
  redux: {
    reducer,
    key: 'catalog'
  }
};
