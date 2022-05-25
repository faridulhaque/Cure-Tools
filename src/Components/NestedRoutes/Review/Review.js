import React, { useEffect } from "react";
import useUserInfo from "../../hooks/useUserInfo/useUserInfo";
import "./Review.css";

const Review = () => {
  const { userInfo } = useUserInfo();
  
  const handleReview = (e) => {
      e.preventDefault();
    const rating = e.target.rating.value;
    const review = e.target.review.value;
    const name = e.target.user.value;
    const email = userInfo.email;
    const img = userInfo.img;
    const reviewInfo = {
        rating,
        review,
        name, 
        email,
        img
    }
    if(email && img){
        fetch(`http://localhost:5000/review/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(reviewInfo)
            })
    }
  };

  return (
    <div>
      <h2 className="text-center heading-review">Add a Review</h2>
      <h3 className="text-center mt-5 mb-5">Tell us about our services</h3>
      <div className="text-area-wrapper-review-parent">
        <form onSubmit={handleReview}>
          <div className="user-name-review">
            <span>as</span>
            <img className='profile-pic-review' src={userInfo.img} alt='avatar'/>
            <input
              name="user"
              className="user-name-review-input"
              type="text"
              value={userInfo.name}
              disabled
            ></input>
          </div>
          <div>
            <span>Rate </span><select className='selected-review' name="rating">
              <option value="5">5</option>
              <option value="4">4</option>
              <option value="3">3</option>
              <option value="2">2</option>
              <option value="1">1</option>
            </select> <span>out of 5</span>
          </div>
          <div className="text-area-wrapper-review">
            <textarea name="review" className="text-area-review"></textarea>
            <div className="button-wrapper-review">
              <button type="submit" className="btn btn-danger mt-2">
                Add Review
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Review;
