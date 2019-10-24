import React, { Component, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


const Login = React.lazy(() => import('./containers/Auth/Login'));
const Signup = React.lazy(() => import('./containers/Auth/Signup'));
const ForgotPassword = React.lazy(() => import('./containers/Auth/ForgotPassword'));
const Dashboard = React.lazy(() => import('./containers/Dashboard/index.js'));


class Routes extends Component {
  state = {}

  render() {
    return (
      <Suspense fallback={<div>loading...</div>}>
        <Router>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/forgot-password" component={ForgotPassword} />
          </Switch>
        </Router>
      </Suspense>
    );
  }
}

export default Routes;
