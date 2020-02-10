import React from 'react';
import { Route } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import EventDetail from './views/EventDetail';
import EventCreate from './views/EventCreate';

function Routes(){

    return(
        <>
            <Route exact path="/" component={Home} /> 
            <Route exact path="/login" component={Login} /> 
            <Route exact path="/event/create" component={EventCreate}/>
            <Route exact path="/events/:id" component={EventDetail}/>
        </> 
    )
}

export default Routes
