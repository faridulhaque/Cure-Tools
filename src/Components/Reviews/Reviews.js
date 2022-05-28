import React, { useEffect, useState } from "react";
import Icons from "./Icons";
import './Review.css';

const Reviews = () => {
  const [review, setReview] = useState([]);
  const [icon, setIcon] = useState('');
  const [loading, setLoading] = useState(true)
  
  
  useEffect(() => {
    fetch("https://stormy-castle-15403.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReview(data)
      });
  }, [review]);
  
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
                
                  <span><Icons rating={r.rating}></Icons></span>
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
