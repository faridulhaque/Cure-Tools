import { auth } from "../../Firebase/firebase.init";
import { useAuthState } from 'react-firebase-hooks/auth';

export const useTheUser = () =>{
    const [user, loading, error] = useAuthState(auth);
    return {
        user,
        loading,
    }
}