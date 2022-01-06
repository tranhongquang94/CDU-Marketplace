import React from 'react';
import {Link} from 'react-router-dom';

function ItemCard({ name, thumbnail, price, location, _id}) {
  return (
    <div className="item">
      <Link to={`item/${_id}`}>
        <div className="thumbnail-container">
          <img src={thumbnail} alt="item" />
        </div>
        <div className="item-desc">
          <span className="title">{name}</span>
          <span className="price">${price}</span>
          <span className="location">{location}</span>
        </div>
      </Link>
    </div>
  );
}

export default ItemCard;
