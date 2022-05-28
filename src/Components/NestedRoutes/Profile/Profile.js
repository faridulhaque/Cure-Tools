import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useUserInfo from "../../hooks/useUserInfo/useUserInfo";
import "./Profile.css";

const Profile = () => {
  // const {
  //   register,
  //   formState: { errors },
  //   handleSubmit,
  // } = useForm();
  const [edit, setEdit] = useState(false);
  const { userInfo } = useUserInfo();
  // console.log(userInfo);

  const handleSubmit = (e) => {
    e.preventDefault();
    const img = userInfo.img;
    const email = e.target.email.value;
    const name = e.target.name.value;
    const address = e.target.address.value;
    const phone = e.target.phone.value;

    const allData = {
      img,
      email,
      name,
      address,
      phone,
    };
    console.log(allData);
    if (allData) {
      fetch(`https://stormy-castle-15403.herokuapp.com/user/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(allData),
      })
        .then((res) => res.json())
        .then((data) => {
          setEdit(false);
        });
    }
  };

  return (
    <div>
      <h2 className="text-center heading-profile">My Profile</h2>
      <div className="">
        <div className="form-wrapper-profile">
          <form className="form-profile" onSubmit={handleSubmit}>
            <div className="img-wrapper-profile">
              <img className='img-profile' src={userInfo.img} alt="avatar" />
            </div>
            <div className="form-input-wrapper-profile">
              <label>Name :</label>{" "}
              <input
                className={!edit ? 'input-form-profile' : 'input-edit-profile'}
                defaultValue={userInfo.name}
                disabled={!edit}
                name="name"
                type="text"
              />
            </div>
            <div className="form-input-wrapper-profile">
              <label>Email :</label>{" "}
              <input
                className={!edit ? 'input-form-profile' : 'input-edit-profile'}
                disabled
                name="email"
                type="email"
                value={userInfo.email}
              />
            </div>
            <div className="form-input-wrapper-profile">
              <label>Phone :</label>{" "}
              <input
                className={!edit ? 'input-form-profile' : 'input-edit-profile'}
                disabled={!edit}
                defaultValue={userInfo.phone}
                name="phone"
                type="text"
              />
            </div>
            <div className="form-input-wrapper-profile">
              <label>Full address :</label>{" "}
              <input
                className={!edit ? 'input-form-profile' : 'input-edit-profile'}
                disabled={!edit}
                defaultValue={userInfo.address}
                name="address"
                type="text"
              />
            </div>

            {edit && <input className="mt-5 btn btn-success" value="Save" type="submit" />}
            {!edit && (
              <input
              className='btn btn-danger mt-5'
                onClick={() => setEdit(true)}
                value="edit"
                type="button"
              ></input>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
