import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Confirm } from "react-st-modal";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  console.log(orders);
  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders]);

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
  const handleShipment =(id) =>{
    const shipment = 'shipped';
    const data = {shipment}
    fetch(`http://localhost:5000/order/shipment/${id}`,{
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(data =>{
      toast.success('Shipment successfully updated!',{id: 'shipment'})
    })
  }

  return (
    <div>
      <h2 className="text-center my-5">Manage Orders</h2>
      <div>

      
      <div className='table container'>
      <thead>
    <tr>
      <th scope="col">Product</th>
      <th scope="col">Quantity</th>
      <th scope="col">Phone</th>
      <th scope="col">Total Price</th>
      <th scope="col">Payment status</th>
      <th scope="col">Shipment status</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
        orders.map((order)=>(<tr key={order._id}>
            
            <td>{order.name}</td>
            <td>{order.quantity}</td>
            <td>{order.phone}</td>
            <td>{order.price}</td>
            <td className={order.payment === 'paid' ? 'text-success' : 'text-danger'}>{order.payment}</td>
            <td className={order.shipment === 'shipped' ? 'text-success' : 'text-warning'}>{order?.shipment ? order.shipment : 'pending'}</td>
            <td><button disabled={order.payment !== 'paid' || order.shipment === 'shipped'} className="btn btn-success" onClick={()=>handleShipment(order._id)}>Shipped</button></td>
            <td><button disabled={order.payment === 'paid'} onClick={()=>handleDelete(order._id)} className="btn btn-danger">Cancel</button></td>

          </tr>))
    }
    </tbody>
      </div>
      </div>
    </div>
  );
};

export default ManageOrders;
