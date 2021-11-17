import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Register from "./Pages/Register/Register";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Login from "./Pages/Login/Login";
import Verification from "./Pages/Verify/Verification";
import PrivateRoute from "./Components/PrivateRoute";
import EmailVerification from "./Pages/EmailVerification/EmailVerification";
import Error404 from "./Pages/Error404/Error404";
import OTPVerification from "./Pages/OTPVerification/OTPVerification";
import ProtectedRoute from "./Components/ProtectedRoute";
import SecureRoute from "./Components/SecureRoute";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path="/" exact component={Dashboard} />
        <ProtectedRoute path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <Route path="/verification" exact component={Verification} />
        <SecureRoute path="/register/verification" exact component={EmailVerification} />
        <SecureRoute path="/verifyEmail" exact component={OTPVerification} />
        <Route path="*" exact component={Error404} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
