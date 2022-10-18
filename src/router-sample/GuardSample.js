import React from "react";
import { Navigate } from "react-router-dom";

function GuardSample({ children }) {
  let userLoginStatus = true;

  if (userLoginStatus) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}

export default GuardSample;
