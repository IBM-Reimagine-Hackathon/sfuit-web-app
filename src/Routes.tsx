import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Register from "./Pages/Register/Register";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Login from "./Pages/Login/Login";
import Verification from "./Pages/Verify/Verification";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import ProtectedRoute from "./Components/ProtectedRoute";
import EmailVerification from "./Pages/EmailVerification/EmailVerification";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <Route path="/verification" exact component={Verification} />
        <Route path="/forgotpassword" exact component={ForgotPassword} />
        <Route path="/register/verification" exact component={EmailVerification} />
        <Route path="/resetpassword" exact component={ResetPassword} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
