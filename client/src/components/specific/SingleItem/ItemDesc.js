import React from 'react'

function ItemDesc({name, price, location, createdAt, description, postedBy}) {
  let timePosted;
  if (createdAt) {
    timePosted = new Date(createdAt);
    timePosted = timePosted.toUTCString()
  };
  
  return (
    <section className="itemDesc-container">
      <p>
        <span>Name: </span>
        {name}
      </p>

      <p>
        <span>Price: </span>${price}
      </p>

      <p>
        <span>Location: </span>
        {location}
      </p>

      <p>
        <span>Time posted: </span>
        {timePosted ? timePosted : "No date"}
      </p>

      <p>
        <span>Description: </span>
        {description}
      </p>

      <p>
        <span>Posted by: </span>
        {postedBy}
      </p>

      <form action="/account/inquiry" method="POST">
        <textarea
          name="inquiry"
          className="itemDesc-inquiries"
          rows="5"
          placeholder="Send questions about the item...(100 chars maximum)"
          maxLength="100"
        ></textarea>

        <button className="btn cta-btn" type="submit">
          Send
        </button>
      </form>
    </section>
  );
}

export default ItemDesc
