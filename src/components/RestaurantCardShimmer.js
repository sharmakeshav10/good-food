import React from "react";

const RestaurantCardShimmer = () => {
  return (
    <div className="res-container">
      {Array.from({ length: 10 }).map((el, i) => {
        return <div key={i} className="res-card shimmer-card"></div>;
      })}
    </div>
  );
};

export default RestaurantCardShimmer;
