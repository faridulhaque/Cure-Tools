import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { auth } from "../Firebase/firebase.init";

const RequireUser = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  
  let location = useLocation();
  if (loading) {
    return <p>Loading....</p>;
  }
  if (!user) {
    return <Navigate to="/logIn" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireUser;