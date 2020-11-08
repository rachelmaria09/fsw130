import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as contactAction from '../src/actions/contactAction';
import MainPage from './pages/mainPage';
import NotFoundPage from './pages/404';
import ServicesPage from './pages/servicesPage';
import FacilitiesPage from './pages/facilitiesPage';
import ContactUs from './pages/contactUs';

class App extends Component {
    render() {
        return <Router>
                    <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route exact path="/404" component={NotFoundPage}/>
                    <Route exact path="/servicesPage" component={ServicesPage} />
                    <Route exact path="/facilitiesPage" component={FacilitiesPage} />
                    <Route exact path="/contactUs" component={ContactUs} />
                    <Redirect to="/404" />
                    </Switch>
                </Router>
    }
}

export default App