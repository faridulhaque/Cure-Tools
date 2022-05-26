import { useEffect, useState } from "react";

import { useTheUser } from "../loggedInuser/useTheUser";

const useUserInfo = () => {
  const { user } = useTheUser();

  const email = user?.email;

  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/user/${email}`)
        .then(res => res.json())
        .then(data => setUserInfo(data));
  },[email]);
  return {
    userInfo
  }
};
export default useUserInfo;
