import React, { useContext } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import { Context } from '..';
import { authRouters, publicRouters } from '../routes';
import { CAKES_MAIN_SHOP_ROUTE } from '../utils/consts';

const App_Router = () => {
    const {user} = useContext(Context)
   
    return (
        <Switch>
            {user.isAuth && authRouters.map(({ path, Component }) =>
                <Route key = { path } path= { path } component = { Component } exact/>
            )}
             {publicRouters.map(({ path, Component }) =>
                <Route key = { path } path= { path } component = { Component } exact/>
            )}
            <Redirect to = { CAKES_MAIN_SHOP_ROUTE }/> {/** если в switch не отрабатывает ни один из маршрутов, то отрабатывает последний */}
        </Switch>
    );
};

export default App_Router;