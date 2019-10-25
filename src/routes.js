import React, { Component, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Login = React.lazy(() => import('./containers/Auth/Login'));
const Signup = React.lazy(() => import('./containers/Auth/Signup'));
const ForgotPassword = React.lazy(() => import('./containers/Auth/ForgotPassword'));
const Dashboard = React.lazy(() => import('./containers/Dashboard/Dashboard.js'));


class Routes extends Component {
  state = {}

  render() {
    return (
      <div>
        <Suspense fallback={<div><center>loading...</center></div>}>
        <Router>
          <Switch> 
              <Route exact path="/" component={Dashboard} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/forgot-password" component={ForgotPassword} />
          </Switch>
        </Router>
        </Suspense>
        <ToastContainer /> 
      </div>
    );
  }
}

export default Routes;
