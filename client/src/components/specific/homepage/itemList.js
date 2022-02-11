import React from "react";
import { ItemCard } from "../../general";
import {
  useGetItemListQuery,
  useGetJobListQuery,
} from "../../../redux/items/API/itemListAPI";

function ItemList({ page, jobList }) {
  let itemList;
  if (jobList?.length) {
    itemList = <JobItemListByCategory data={jobList} />;
  } else {
    switch (window.location.pathname) {
      case "/jobs":
        itemList = <JobItemList />;
        break;

      default:
        itemList = <GenerateItemList />;
        break;
    }
  }

  return (
    <section className="items-list-container">
      {page === "homepage" && (
        <h2 className="section-title">
          Browse your favorite items and services
        </h2>
      )}
      <div className="items-container">{itemList}</div>
    </section>
  );
}

// Item list for general item
function GenerateItemList() {
  const { data, error, isLoading } = useGetItemListQuery();
  return (
    <>
      {data?.map((item) => {
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
    </>
  );
}

// Item list for jobs
function JobItemList() {
  const { data, error, isLoading } = useGetJobListQuery();
  return (
    <>
      {data?.map((item) => {
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
    </>
  );
}

// Filter Job list by category
function JobItemListByCategory({ data }) {
  return (
    <>
      {data?.map((item) => {
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
    </>
  );
}

export default ItemList;
