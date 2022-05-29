import { useEffect, useState } from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);
    useEffect(() => {
        const email = user?.email;
        if(email){
            fetch(`https://stormy-castle-15403.herokuapp.com/users/admin/${email}`)
            .then(res => res.json())
            .then(data=>{
                console.log(data);
                setAdmin(data.admin);
                setAdminLoading(false);

            })
        }
    })
  return [admin, adminLoading];
};
export default useAdmin;
