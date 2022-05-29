import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../Firebase/firebase.init";
import Loading from "../hooks/Admin/Loading/Loading";
import useAdmin from "../hooks/Admin/useAdmin";

const RequireUser = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const [admin , adminLoading] = useAdmin(user);
  const navigate = useNavigate();
  
  let location = useLocation();
  if (loading || adminLoading) {
    return <Loading></Loading>;
  }
  if (!user) {
    return <Navigate to="/logIn" state={{ from: location }} replace />;
  }
  if(admin){
    navigate('/denied')
  }
  return children;
};

export default RequireUser;