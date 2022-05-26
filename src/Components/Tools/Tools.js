import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Tools.css";

const Tools = () => {
  const [tools, setTools] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/tools")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);

  const handleEachTool = (id) => {
    navigate(`home/${id}`);
  };
  return (
    <div className="mb-5">
      <h2 className="text-center mt-5 mb-5">Equipments</h2>
      <div className="cards">
        {tools.reverse().slice(0, 3).map((tool) => (
          <div key={tool._id} className="single-card">
            <img className="img-tool" src={tool.img} alt="" />
            <div className="btn-tool-wrapper">
              <button
                onClick={() => handleEachTool(tool._id)}
                className="btn-tool"
              >
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
            <p className="tool-name">{tool.name}</p>
            <div className="quantities">
              <div className="quantities-tool-wrapper">
                <p className="quantities-tool-item">Price</p>
                <p className="quantities-tool-value">$ {tool.price}</p>
              </div>
              <div className="quantities-tool-wrapper">
                <p className="quantities-tool-item">Available Quantity</p>
                <p className="quantities-tool-value">
                  {tool.avlQuantity} <sub>unit</sub>{" "}
                </p>
              </div>
              <div className="quantities-tool-wrapper">
                <p className="quantities-tool-item">Minimum Order Quantity</p>
                <p className="quantities-tool-value">
                  {tool.minQuantity} <sub>unit</sub>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
