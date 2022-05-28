import { useEffect, useState } from "react";

import { useTheUser } from "../loggedInuser/useTheUser";

const useUserInfo = () => {
  const [adminLoading, setAdminLoading] = useState(true);
  
  const { user } = useTheUser();
  const [userInfo, setUserInfo] = useState({});
  const admin = userInfo?.role;
  const email = user?.email;
  

  // console.log(userInfo);
  useEffect(() => {
    fetch(`https://stormy-castle-15403.herokuapp.com/user/${email}`)
        .then(res => res.json())
        .then(data => {
          setUserInfo(data)
          setAdminLoading(false)
        });
  },[email]);
  return {
    userInfo,
    admin,
    adminLoading
  }
};
export default useUserInfo;
