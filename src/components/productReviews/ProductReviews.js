import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import "./ProductReviews.scss";

import { AddReview, ProductReview } from "..";
import { selectUser } from "../../features/userSlice";

function ProductReviews() {
  const location = useLocation();
  const { state } = location;
  const user = useSelector(selectUser);

  return (
    <div className="productReviews">
      {user && (
        <div className="productReviews__addReview">
          <AddReview />
        </div>
      )}
      <div className="productReviews__reviews">
        {!state.reviews ? (
          <p>No comments available..</p>
        ) : (
          state.reviews.map((review) => <ProductReview review={review} />)
        )}
      </div>
    </div>
  );
}

export default ProductReviews;
