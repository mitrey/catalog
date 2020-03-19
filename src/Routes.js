import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const MainPage = lazy(() => import('./pages/Main'));
const CountryInfoPage = lazy(() => import('./pages/CountryInfo'));

const Routes = () => (
    <Suspense fallback={<div>loading</div>}>
        <Router>
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route path="/:countryId" component={CountryInfoPage} />
            </Switch>
        </Router>
    </Suspense>
);

export default Routes;
