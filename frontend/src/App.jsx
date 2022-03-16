
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import FrontPage from "./Pages/FrontPage/index";
import Authenticate from "./Pages/authentication";
import RequireAuth from "./AuthProvider/requireAuth";
import Loader from "./components/loader";

function App() {
  const { isLoading } = useAuth0();

  return (
    <>
      {!isLoading ? (
        <BrowserRouter>
          <Routes>
            <Route path="/authenticate" element={<Authenticate />} />
            <Route
              path="/"
              element={
                <RequireAuth redirectTo="/authenticate">
                  <FrontPage />
                </RequireAuth>
              }
            />
          </Routes>
        </BrowserRouter>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default App;
