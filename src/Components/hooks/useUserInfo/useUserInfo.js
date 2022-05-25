import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../Firebase/firebase.init";
import { useTheUser } from "../loggedInuser/useTheUser";


const useUserInfo = () =>{
    const {user} = useTheUser();
    
    const email = user?.email;
    
    const [userInfo, setUserInfo] = useState({});
    const url = `http://localhost:5000/user/${email}`
    useEffect(() =>{
        fetch(url)
        .then(res => res.json())
        .then(data=> setUserInfo(data));
    },[url, user]);
    return {
        userInfo
    }
}
export default useUserInfo;