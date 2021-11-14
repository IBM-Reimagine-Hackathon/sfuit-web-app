import React from "react";
import { Redirect, Route } from "react-router-dom";

function ProtectedRoute({ component: Component, ...otherProps }: any){
  const sfuit = localStorage.getItem("deviceId");
  const device = sfuit ? true : false;
  return (
    <Route
      {...otherProps}
      render={(props) => {
        return device ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={otherProps.redirectTo ? otherProps.redirectTo : "/verification"}
          />
        );
      }}
    />
  );
}

export default ProtectedRoute;