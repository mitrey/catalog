import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import modules from './modules';

const Router = () => (
    <Suspense fallback={<div>loading</div>}>
        <BrowserRouter>
            <Switch>
                {modules.map(({ name, routeProps }) => (
                    <Route {...routeProps} key={name} />
                ))}
            </Switch>
        </BrowserRouter>
    </Suspense>
);

export default Router;
