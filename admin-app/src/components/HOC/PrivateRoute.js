import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = window.localStorage.getItem("token");

  if (token) {
    return <Component />;
  } else {
    return <Navigate to="/signin" replace={true} />;
  }
};
export default PrivateRoute;
