import { useEffect, useState } from "react"

const useToken = (receivedUser) => {
    const [token, setToken] = useState('');
    
    const avatar = "https://i.ibb.co/6YK1cXs/avatar.jpg";
    
    
    
    useEffect(() => {
        const email = receivedUser?.user?.email ? receivedUser?.user?.email : receivedUser?.email;
        const name = receivedUser?.user?.displayName ? receivedUser?.user?.displayName : receivedUser?.displayName;
        const img = receivedUser?.user?.photoURL ? receivedUser?.user?.photoURL : avatar;
        
        const user = {
            email,
            name, 
            img
        }
        if(email && name && img){
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