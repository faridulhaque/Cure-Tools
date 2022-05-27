import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../Firebase/firebase.init";
import { useTheUser } from "../hooks/loggedInuser/useTheUser";

const RequireAdmin = ({ children }) => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  const { admin, adminLoading } = useTheUser();

  let location = useLocation();
  if (loading || adminLoading) {
    return <p>Loading....</p>;
  }
  if (!user || admin) {
    return <Navigate to="/logIn" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAdmin;
