import React, { useEffect, useState } from "react";
import "./Orders.css";
import { useTheUser } from "../../hooks/loggedInuser/useTheUser";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../Firebase/firebase.init";
import { Confirm } from "react-st-modal";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const Orders = () => {
  const params = useParams('id');
  const navigate= useNavigate();
  const [user, setUser] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
  }, []);

  const {email} = user;

  const [orders, setOrders] = useState([]);
  
  const url = `http://localhost:5000/myOrders?email=${email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {setOrders(data);
      });
  }, [orders]);

  const handlePayment = (id) =>{
    navigate(`/more/payment/${id}`);
  }

  const handleDelete = async (id) => {
    const result = await Confirm("You can't undo this action.", 
      'Are you sure?');
    
    if (result) {
      const url = `http://localhost:5000/order/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success('Successfully deleted!',{id: 'deleteItem'})
        });
    }
  }
  

  return (
    <div>
      <h2 className="text-center heading-orders">My Orders</h2>
      <div className="container">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price (per Unit)</th>
              <th scope="col">Total Price</th>
              <th scope="col">Payment Status</th>
              <th scope="col">Transaction ID</th>
              <th scope="col">Payment</th>
              <th scope="col">Cancellation</th>

            </tr>
          </thead>
          <tbody>
            {
              orders.map(order =>(<tr key={order._id}>
              
                <td>{order.product}</td>
                <td>{order.quantity} <sub>unit</sub></td>
                <td>{order.price}</td>
                <td>{order.totalPrice}</td>
                <td className={order.payment === 'paid' ? 'text-success' : 'text-warning'}>{order.payment}</td>
                <td className='text-success'>{order.transaction}</td>
                <td><button disabled={order.payment === 'paid'} onClick={()=>handlePayment(order._id)} className='btn btn-success'>Pay now</button></td>
                <td><button disabled={order.payment === 'paid'} onClick={()=>handleDelete(order._id)} className='btn btn-danger'>Cancel</button></td>
              </tr>))
            }
          </tbody>
        </table>
      </div>
      
    </div>
  );
};

export default Orders;
