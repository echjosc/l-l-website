
import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import AppliedRoute from "./components/AppliedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
import AuthenticatedRoute from "./components/AuthenticatedRoute";

export default ({ childProps }) =>
    <BrowserRouter>
        <Switch>
            <AppliedRoute path="/" exact component={Home} props={childProps} />

            { /* Finally, catch all unmatched routes */}
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
