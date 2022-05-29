
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../Firebase/firebase.init";
import useAdmin from '../hooks/Admin/useAdmin';

const RequireAdmin = ({ children }) => {
  const navigate = useNavigate()
  let location = useLocation();
  const [user, loading, error] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user)

  if (loading || adminLoading) {
    return <p>Loading....</p>;
  }
  if (!user) {
    signOut(auth);
    return <Navigate to="/logIn" state={{ from: location }} replace />;
  }
  if (!admin) {
    
    navigate('/denied')
  }
  
  return children;
};

export default RequireAdmin;
