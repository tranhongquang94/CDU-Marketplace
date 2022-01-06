import React from "react";
import { ItemCard } from "./";
import { ItemCardLong } from "./";

function RecentlyListed({ data }) {
  return (
    <section className="recently-listed-section-container">
      <h2 className="section-title">Recently Listed</h2>

      {
        window.location.pathname !== "/accomodation" && (
          <div className="recently-listed-items-container">
            {data.map((item) => {
              const { name, thumbnail, price, location, _id } = item;
              return (
                <ItemCard
                  name={name}
                  thumbnail={thumbnail}
                  price={price}
                  location={location}
                  key={_id}
                  _id={_id}
                />
              );
            })}
          </div>)
      }

      {
        window.location.pathname === "/accomodation" && (
          <div className="recently-listed-items-container-long">
            {data.map((item) => {
                const { name, thumbnail, price, location, _id, description } = item;
                return (
                  <ItemCardLong
                    name={name}
                    thumbnail={thumbnail}
                    price={price}
                    location={location}
                    key={_id}
                    _id={_id}
                    description={description}
                  />
                );
              })}
          </div>)
      }

    </section>
  );
}

export default RecentlyListed;


