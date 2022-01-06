import React from 'react'
import { Link } from "react-router-dom";

function itemCardLong({ name, thumbnail, price, location, _id, description }) {
  return (
    <Link to={`item/${_id}`}>
      <div className="item-long">
        <div className="thumbnail-container">
          <img src={thumbnail} alt="item" />
        </div>
        <div className="item-desc">
          <span className="title">{name}</span>
          <span className="price">${price}</span>
          <span className="description">{description}</span>
          <span className="location">{location}</span>
        </div>
      </div>
    </Link>
  );
  
}

export default itemCardLong
