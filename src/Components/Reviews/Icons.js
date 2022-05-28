import React from "react";

const Icons = ({ rating }) => {
  const icon = parseInt(rating);

  return (
    <div>
      {[...Array(icon)].map((star) => (
        <i className="fa-solid fa-star" style={{color: 'gold'}}></i>
      ))}
    </div>
  );
};

export default Icons;
