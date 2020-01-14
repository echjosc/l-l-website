
import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Main from "./containers/Main";
import AboutUs from "./containers/AboutUs"
import NotFound from "./containers/NotFound";
import Services from './containers/Services'
import FAQ from './containers/FAQ';
import AppliedRoute from "./components/AppliedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
import AuthenticatedRoute from "./components/AuthenticatedRoute";

export default ({ childProps }) =>
    <BrowserRouter>
        <Switch>
            <AppliedRoute path="/" exact component={Main} props={childProps} />
            <AppliedRoute path="/AboutUs" exact component={AboutUs} props={childProps} />
            <AppliedRoute path="/Services" exact component={Services} props={childProps} />
            <AppliedRoute path="/FAQ" exact component={FAQ} props={childProps} />

            { /* Finally, catch all unmatched routes */}
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
