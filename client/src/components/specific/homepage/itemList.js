import React from "react";
import {ItemCard} from "../../general";

function ItemList({data, page}) {
  return (
    <section className="items-list-container">
      {page === "homepage" && (
        <h2 className="section-title">
          Browse your favorite items and services
        </h2>
      )}
      <div className="items-container">
        {data.map((item) => {
          const { name, thumbnail, price, location, _id } = item;
          return (
            <ItemCard name={name} thumbnail={thumbnail} price={price} location={location} key={_id} _id={_id}/>
          );
        })}
      </div>
    </section>
  );
}



export default ItemList;
