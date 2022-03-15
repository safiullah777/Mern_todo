import { useEffect, useState } from "react";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
// import {} from 'reac'
import axios from "axios";
import FrontPage from "./Pages/FrontPage/index";
import Authenticate from "./Pages/authentication";
import { PrivateRoute } from "./components/PrivateRoute";
import Loader from "./components/loader";



function App() {
  const {isAuthenticated,loginWithRedirect,user,isLoading} = useAuth0();

  return (
    <>
     {/* {!isLoading ? <BrowserRouter>
        <Routes>
        {isAuthenticated ?<Route element={<PrivateRoute />} >
            <Route path="/"  element={<FrontPage />} />
         </Route>:
        <Route path='/authenticate'  element={<Authenticate />} /> }  
        <Route path="*" element={<Navigate to="/" replace />} />    
        </Routes> 
      </BrowserRouter>
      :<Loader />} */}
      {!isLoading && isAuthenticated? <FrontPage />:!isLoading && !isAuthenticated ?<Authenticate />:<Loader />}
    </>
  );
}

export default App;
