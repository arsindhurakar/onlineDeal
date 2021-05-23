import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./AddReview.scss";

import { Input, Button } from "..";

function AddReview() {
  const [reviewMessage, setReviewMessage] = useState("");

  const location = useLocation();
  const { state } = location;

  const reviews = [reviewMessage];

  const handleChange = (e) => {
    setReviewMessage(e.target.value);
  };

  const handleAdd = () => {
    !state.reviews
      ? Object.assign(state, { reviews })
      : state.reviews.push(reviewMessage);
    setReviewMessage("");
  };

  return (
    <div className="addReview">
      <Input
        isMessage
        placeholder="How do you like the product?"
        onChange={handleChange}
        value={reviewMessage}
      />
      <div className="addReview__btn">
        <Button onClick={handleAdd}>Add Review</Button>
      </div>
    </div>
  );
}

export default AddReview;
