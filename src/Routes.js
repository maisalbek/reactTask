import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ContactList from './components/ContactList';

const Routes = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route path='/home' component={Header}/>
            <Route path='/list' component={ContactList}/>
        </Switch>
            
        </BrowserRouter>
    );
};

export default Routes;