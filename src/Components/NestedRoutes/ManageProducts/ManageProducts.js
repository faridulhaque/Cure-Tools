import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Confirm } from 'react-st-modal';

const ManageProducts = () => {
    const [tools, setTools] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/tools')
        .then(res => res.json())
        .then(data=> setTools(data))
    },[tools])

    const handleDelete = async (id) => {
        const result = await Confirm("You can't undo this action.", 
          'Are you sure?');
        
        if (result) {
          const url = `http://localhost:5000/tool/${id}`;
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
            <h2 className='text-center my-4'>Manage Products</h2>
            <div className='container'>
            <table className="table container">
          <thead>
            <tr>
              <th scope="col">Product Name</th>
              <th scope="col">Available Quantity</th> 
              <th scope="col">Price (per Unit)</th>
              <th scope="col">Manage</th>
            </tr>
          </thead>
          <tbody>
            {tools.map((tool) => (
              <tr key={tool._id}>
                <td>{tool.name}</td>
                <td>{tool.avlQuantity}</td>
                <td>{tool.price}</td>
                
                <td>
                  <button onClick={()=>handleDelete(tool._id)} className="btn btn-danger">Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

            </div>
        </div>
    );
};

export default ManageProducts;