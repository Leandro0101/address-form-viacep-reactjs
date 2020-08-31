import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Address from './pages/address';
const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Address} />
        </Switch>
    </BrowserRouter>
)

export default Routes;