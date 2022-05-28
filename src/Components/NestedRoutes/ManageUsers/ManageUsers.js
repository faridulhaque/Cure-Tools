import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Confirm } from "react-st-modal";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://stormy-castle-15403.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [users]);

  const makeAnAdmin = (id) => {
    fetch(`https://stormy-castle-15403.herokuapp.com/user/admin/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {});
  };

  const deleteAdmin = async (id) => {
    const result = await Confirm("You can't undo this action.", 
      'Are you sure?');
    
    if (result) {
      const url = `https://stormy-castle-15403.herokuapp.com/user/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success('Successfully deleted!',{id: 'deleteItem'})
        });
    }
  };
  return (
    <div>
      <h2 className="text-center">Manage Users</h2>
      <div>
        <table className="table container">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Add an admin</th>
              <th scope="col">Remove a user</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button disabled={user.role === 'admin'}
                    onClick={() => makeAnAdmin(user._id)}
                    className="btn btn-success"
                  >
                    Add
                  </button>
                </td>
                <td>
                  <button 
                    onClick={()=>deleteAdmin(user._id)}
                    className="btn btn-danger"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
