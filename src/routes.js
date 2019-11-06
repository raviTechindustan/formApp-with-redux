import React, { Component, Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { scrollIntoView } from "./utils";

const Login = lazy(() => import('./containers/Auth/Login'));
const Signup = React.lazy(() => import('./containers/Auth/Signup'));
const ForgotPassword = React.lazy(() => import('./containers/Auth/ForgotPassword'));
const Resetpassword = React.lazy(() => import('./containers/Auth/ResetPassword'));
const Dashboard = React.lazy(() => import('./containers/Dashboard/Dashboard.js'));


class Routes extends Component {
  state = {}

  goToTop = () => {
    scrollIntoView("top")
  }

  render() {
    return (
      <div className="top" id="top">
        <Suspense fallback={<div><center>loading...</center></div>}>
          <Router>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/reset-password" component={Resetpassword} />
            </Switch>
          </Router>
        </Suspense>
        <ToastContainer />
        <div className="abc" onClick={this.goToTop} ></div>
      </div>

    );
  }
}

export default Routes;
