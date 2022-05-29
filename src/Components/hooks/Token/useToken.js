import { useEffect, useState } from "react";

const useToken = (receivedUser) => {
  const [token, setToken] = useState("");

  const avatar = "https://i.ibb.co/6YK1cXs/avatar.jpg";

  useEffect(() => {
    const email = receivedUser?.user?.email;
    const name = receivedUser?.user?.displayName ? receivedUser?.user?.displayName : "user";
    const img = receivedUser?.user?.photoURL
      ? receivedUser?.user?.photoURL
      : avatar;
    // const role = 'admin';
    const user = {
      email,
      name,
      img,
    };

    if (email && name && img) {
      fetch(`https://stormy-castle-15403.herokuapp.com/user/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          const accessToken = data.token;
          setToken(accessToken);
          localStorage.setItem("accessToken", accessToken);
          console.log(data);
        });
    }
  }, [receivedUser]);
  return [token];
};
export default useToken;
