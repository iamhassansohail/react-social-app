// Library
import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
// Pages
import HomePage from '../Pages/Home';
import AboutUsPage from "../Pages/AboutUs";
// Constants
import {Routing} from '../Utils/CommonContants';

class Navigation extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path={Routing.HOME.link} name={Routing.HOME.name} component={HomePage}/>
                    <Route exact path={Routing.ABOUT.link} name={Routing.ABOUT.name} component={AboutUsPage}/>
                </Switch>

            </BrowserRouter>
        )
    }
}

export default Navigation