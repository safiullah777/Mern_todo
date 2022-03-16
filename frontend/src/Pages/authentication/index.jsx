import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router";
import "./style.css";
const Authenticate = () => {
  const { loginWithPopup,isAuthenticated } = useAuth0();
  if(isAuthenticated){
    return <Navigate to='/' />
  }
  return (
    <div className="authpage">
      <h1>Can not access</h1>
      <h2>user is not authenticated!! </h2>
      <button onClick={loginWithPopup} className="authenticate">
        Authenticate
      </button>
    </div>
  );
};

export default Authenticate;
