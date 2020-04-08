import { lazy } from 'react';
import reducer from './redux';

const Country = lazy(() => import('./pages/Country'));

export default {
  name: 'Country',
  routeProps: {
    path: '/:countryId',
    exact: true,
    component: Country,
  },
  redux: {
    reducer,
    key: 'country'
  }
};