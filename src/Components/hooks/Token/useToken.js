import { useEffect, useState } from "react";

const useToken = (receivedUser) => {
  const [token, setToken] = useState("");
  const avatar = "https://i.ibb.co/6YK1cXs/avatar.jpg";
  const email = receivedUser?.user?.email;
  const name = receivedUser?.user?.displayName;

  const img = receivedUser?.user?.photoURL
    ? receivedUser?.user?.photoURL
    : avatar;

  useEffect(() => {
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
  }, [email, name, img]);
  return [token];
};
export default useToken;
