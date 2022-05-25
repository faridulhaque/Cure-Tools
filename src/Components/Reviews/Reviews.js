import React, { useEffect, useState } from "react";
import './Review.css';

const Reviews = () => {
  const [review, setReview] = useState([]);
  const [icon, setIcon] = useState('');
  
  
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReview(data)
      });
  }, []);
  console.log(icon);
  return (
    <div className="reviews">
      <h2 className="text-center">Reviews</h2>
      <div className="reviews-wrapper">
        {review.map((r) => (
          <div className="review-card" key={r._id}>
            <div className="info-reviews">
              <div className='name-img-wrapper-reviews'>
                <img className="review-img" src={r.img} alt="" />
                <span className='user-name-review'>
                  {" "}
                  <b>{r.name}</b>
                </span>
              </div>
              <div>
                  <span>Rating: <b>{r.rating}</b></span>
              </div>
            </div>
            <div className="comment-reviews">
              <p>{r.review}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
