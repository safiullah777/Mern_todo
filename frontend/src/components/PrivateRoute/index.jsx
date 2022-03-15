import { Navigate ,Outlet} from "react-router";
import { useAuth0 } from "@auth0/auth0-react";

export const PrivateRoute=() =>{
    const {isAuthenticated} = useAuth0();
    console.log(isAuthenticated);
    return isAuthenticated ? <Outlet /> : <Navigate to="/authenticate" />;
}
export const PrivateRouteLogin=() =>{
  const {isAuthenticated} = useAuth0();
  console.log(isAuthenticated);
  return !isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}
