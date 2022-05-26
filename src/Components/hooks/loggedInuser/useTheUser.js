import { auth } from "../../Firebase/firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { useState } from "react";

export const useTheUser = () => {
  const [user, loading, error] = useAuthState(auth);
  const [userInfo, setUserInfo] = useState({});
  return {
    user,
    loading,
  };
};
