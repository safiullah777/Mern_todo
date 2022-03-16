import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router";
function RequireAuth({ children,redirectTo }) {
  const { isAuthenticated } = useAuth0();
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
}
export default RequireAuth;
