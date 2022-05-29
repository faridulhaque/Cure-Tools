import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation} from "react-router-dom";
import { auth } from "../../Firebase/firebase.init";
import useAdmin from "../../hooks/Admin/useAdmin";

const RequireCommon = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);
  

  let location = useLocation();
  if (loading || adminLoading) {
    return <p>Loading....</p>;
  }
  if (!user) {
    return <Navigate to="/logIn" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireCommon;
