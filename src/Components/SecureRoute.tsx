import React from "react";
import { Redirect, Route } from "react-router-dom";

function SecureRoute({ component: Component, ...otherProps }: any){
  const sfuit = localStorage.getItem("email");
  const email = localStorage.getItem("deviceId");
  const device = sfuit && email ? true : false;
  return (
    <Route
      {...otherProps}
      render={(props) => {
        return device ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={otherProps.redirectTo ? otherProps.redirectTo : "/register"}
          />
        );
      }}
    />
  );
}

export default SecureRoute;