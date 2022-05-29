import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation} from "react-router-dom";
import { auth } from "../../Firebase/firebase.init";
import Loading from "../../hooks/Admin/Loading/Loading";
import useAdmin from "../../hooks/Admin/useAdmin";

const RequireCommon = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  
  

  let location = useLocation();
  if (loading) {
    return <Loading></Loading>;
  }
  if (!user) {
    return <Navigate to="/logIn" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireCommon;
