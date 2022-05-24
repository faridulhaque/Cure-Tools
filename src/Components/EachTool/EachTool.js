import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./EachTool.css";
import { useTheUser } from "../hooks/loggedInuser/useTheUser";
import { Confirm } from "react-st-modal";
const EachTool = () => {
  const navigate = useNavigate();
  const { eachTool } = useParams();
  const [tool, setTool] = useState({});
  const [error, setError] = useState("");
  const { user } = useTheUser();

  useEffect(() => {
    fetch(`http://localhost:5000/tool/${eachTool}`)
      .then((res) => res.json())
      .then((data) => {
        setTool(data);
      });
  }, [eachTool]);

  const handleError = (e) => {
    if (parseInt(e.target.value) < parseInt(tool.minQuantity)) {
      setError(`Quantity value must be at least ${tool.minQuantity}`);
    } else if (parseInt(e.target.value) > parseInt(tool.avlQuantity)) {
      setError(`Quantity value must be at most ${tool.avlQuantity}`);
    } else {
      setError("");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const product = e.target.pName.value;
    const quantity = e.target.quantity.value;
    const price = tool.price;
    const totalPrice = parseInt(quantity) * parseInt(price);
    const name = e.target.uName.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const address = e.target.address.value;
    const role = 'user';
    const payment = 'pending';


    const orderInfo = {
      product,
      quantity,
      price, 
      totalPrice,
      name,
      email,
      phone,
      address,
      role,
      payment
    }
    
  
    const postingData = () =>{
      const url = 'http://localhost:5000/orders';
      fetch(url,{
        method: 'POST',
        headers: {
          'content-type': 'application/json',

        },
        body: JSON.stringify(orderInfo)
      })
      .then(res => res.json())
      .then(data =>{
        confirmationModal();
      })
    }

    postingData();
  };
  const confirmationModal = async () => {
    const result = await Confirm('Visit "My Orders" page to confirm your payment.', 
      'Item added to the card!');
    
    if (result) {
      navigate('/more/orders');
    }
  }
  return (
    <div className="each-tool-main">
      <div className="each-tool-card-left">
        <div className="each-tool-single-card">
          <img className="img-each-tool" src={tool.img} alt="" />

          {/* <p className="tool-name">{tool.name}</p> */}
          <div className="each-tool-quantities mt-3">
            <div className="quantities-each-tool-wrapper">
              <p className="quantities-each-tool-item">Price</p>
              <p className="quantities-each-tool-value">$ {tool.price}</p>
            </div>
            <div className="quantities-each-tool-wrapper">
              <p className="quantities-each-tool-item">Available Quantity</p>
              <p className="quantities-each-tool-value">
                {tool.avlQuantity} <sub>unit</sub>{" "}
              </p>
            </div>
            <div className="quantities-each-tool-wrapper">
              <p className="quantities-each-tool-item">
                Minimum Order Quantity
              </p>
              <p className="quantities-each-tool-value">
                {tool.minQuantity} <sub>unit</sub>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="each-tool-des-nd-order-right">
        <div className="each-tool-order">
          <h3 className='mb-3'>Order Form</h3>
          <div>
            <form className="et-from" onSubmit={handleSubmit}>
              <div className="et-input-wrapper">
                <label className='et-label' htmlFor="name">Product Name</label>
                <br/>
                <input className="et-input"name="pName" type="text" value={tool.name} disabled />
              </div>
              <div className="et-input-wrapper">
                <label className='et-label'>Add a quantity</label>
                <br />
                <input
                  className="et-input"
                  type="number"
                  name="quantity"
                  onChange={handleError}
                  required
                />
                
              </div>
                {error && <small className="text-danger">{error}</small>}
              <div className="et-input-wrapper">
                <label className='et-label' htmlFor="uName">Your Name</label>
                <br/>
                <input className="et-input" name="uName" type="text" required />
              </div>
              <div className="et-input-wrapper">
                <label className='et-label' htmlFor="email">Your Email</label>
                <br/>
                <input className="et-input" type="email" name="email" value={user?.email} disabled />
              </div>
              <div className="et-input-wrapper">
                <label className='et-label' htmlFor="phone">Your Phone NO.</label>
                <br/>
                <input className="et-input" name="phone" type="text" required />
              </div>
              <div className="et-input-wrapper">
                <label className='et-label' htmlFor="address">Your Address</label>
                <br/>
                <textarea className="et-text-area" name="address" type="text" required />
              </div>
              <div className="et-input-wrapper">
                <button className="et-button-submit btn btn-danger" type="submit" disabled={error}>
                  Purchase
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachTool;
