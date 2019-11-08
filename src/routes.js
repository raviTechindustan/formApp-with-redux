import React, { Component, Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { isLoggedIn } from "./utils"
import { scrollIntoView } from "./utils";

const Login = lazy(() => import('./containers/Auth/Login'));
const Signup = React.lazy(() => import('./containers/Auth/Signup'));
const ForgotPassword = React.lazy(() => import('./containers/Auth/ForgotPassword'));
const Resetpassword = React.lazy(() => import('./containers/Auth/ResetPassword'));
const Dashboard = React.lazy(() => import('./containers/Dashboard/Dashboard.js'));

const PrivateRoute = ({ component: Component, ...rest }) => {
  return <Route {...rest} render={props => isLoggedIn() ? <Component {...props}/> : <Redirect to="/Login" /> }/>
}

const PublicRoute = ({ component: Component, ...rest }) => {
  return <Route {...rest} render={ props => <Component {...props} /> } />
}

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
              <PrivateRoute exact path="/" component={Dashboard} />
              <PublicRoute path="/Login" component={Login} />
              <PublicRoute path="/signup" component={Signup} />
              <PublicRoute path="/forgot-password" component={ForgotPassword} />
              <PublicRoute path="/reset-password" component={Resetpassword} />
              <Route component={NotFound} />
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


const NotFound = () => {
  return (
    <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <h1>The route you are looking for is not found</h1>
    </div>
  )
}
