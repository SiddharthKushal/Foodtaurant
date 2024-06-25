// RestaurantCard.js
import React from "react";

const RestaurantCard = ({ data }) => {
  if (!data) return <div>Loading or No data...</div>;

  return (
    <div className="rest-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="rest-logo"
        alt={`${data.name} logo`}
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${data.cloudinaryImageId}`}
      />
      <h3>{data.name}</h3>
      <h4>{data.cuisines.join(", ")}</h4>
      <h4>{data.costForTwo}</h4>
      <h4>{data.avgRating}</h4>
      <h4>{`${data.sla.deliveryTime} mins`}</h4>
    </div>
  );
};

export default RestaurantCard;
