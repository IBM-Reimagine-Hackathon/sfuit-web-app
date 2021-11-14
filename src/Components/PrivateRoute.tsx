import React from "react";
import { Redirect, Route } from "react-router-dom";

function PrivateRoute({ component: Component, ...otherProps }: any){
  const sfuit = JSON.parse(localStorage.getItem("sfuit") || '{}');
  const authenticated = sfuit.token ? true : false;
  return (
    <Route
      {...otherProps}
      render={(props) => {
        return authenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={otherProps.redirectTo ? otherProps.redirectTo : "/login"}
          />
        );
      }}
    />
  );
}

export default PrivateRoute;