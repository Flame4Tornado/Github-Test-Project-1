import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import ContactPage from '../pages/ContactPage';
import AdminPage from '../pages/AdminPage';
import ErrorPage from '../pages/ErrorPage';
import LoginPage from '../pages/LoginPage';
import ProductListPage from '../pages/ProductListPage';

const Page = () => {
    return ( 
        <>
        <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/products" exact  component={ProductListPage}/>
        <Route path="/products/:id"  component={ProductPage}/>
        <Route path="/contact"  component={ContactPage}/>
        <Route path="/admin"  component={AdminPage}/>
        <Route path="/login"  component={LoginPage}/>
        <Route component={ErrorPage}/>
        </Switch>
        </>
     );
}
 
export default Page;