import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Register from "./Pages/Register/Register";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Login from "./Pages/Login/Login";
import Verification from "./Pages/Verify/Verification";
import ProtectedRoute from "./Components/ProtectedRoute";
import EmailVerification from "./Pages/EmailVerification/EmailVerification";
import Error404 from "./Pages/Error404/Error404";
import OTPVerification from "./Pages/OTPVerification/OTPVerification";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <ProtectedRoute path="/" exact component={Dashboard} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/verification" exact component={Verification} />
        <Route path="/register/verification" exact component={EmailVerification} />
        <Route path="/verifyEmail" exact component={OTPVerification} />
        <Route path="*" exact component={Error404} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
