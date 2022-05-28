import { useEffect, useState } from "react"

const useToken = (receivedUser) => {
    const [token, setToken] = useState('');
    console.log(receivedUser)
    
    const avatar = "https://i.ibb.co/6YK1cXs/avatar.jpg";
    
    
    
    
    useEffect(() => {
        const email = receivedUser?.user?.email ? receivedUser?.user?.email : receivedUser?.email;
        const name = receivedUser?.user?.displayName ? receivedUser?.user?.displayName : receivedUser?.displayName ||'user';
        const img = receivedUser?.user?.photoURL ? receivedUser?.user?.photoURL : avatar;
        // const role = 'admin';
        const user = {
            email,
            name, 
            img,
            
        }
        console.log(user)
        
        if(email && name && img){
            fetch(`https://stormy-castle-15403.herokuapp.com/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => {})
        }
        
    },[receivedUser]);
    return [token];
}
export default useToken;