import { useEffect, useState } from "react"

const useToken = (receivedUser) => {
    const [token, setToken] = useState('');
    console.log(receivedUser)
    
    useEffect(() => {
        const email = receivedUser?.user?.email ? receivedUser?.user?.email : receivedUser?.email;
        const name = receivedUser?.user?.displayName ? receivedUser?.user?.displayName : 'user';
        const user = {
            email,
            name
        }
        if(email){
            fetch(`http://localhost:5000/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
        }
        
    },[receivedUser]);
    return [token];
}
export default useToken;