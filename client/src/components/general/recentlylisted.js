import React from "react";
import { ItemCard } from "./";
import { ItemCardLong } from "./";
import {
  useRecentItemListQuery,
  useRecentCarsListQuery,
  useRecentAccomodationQuery
} from "../../redux/items/API/itemRecentAPI";

function RecentlyListed() {
  let recentItemList;
  switch(window.location.pathname) {
    case "/":
      recentItemList = <RecentlyListedItem />
      break;

    case "/cars":
      recentItemList = <RecentlyListedCars />
      break;

    case "/accomodation":
      recentItemList = <RecentlyListedAccomodation />
      break;

    default:
      recentItemList = <RecentlyListedItem />
      break;
  }
  return (
    <section className="recently-listed-section-container">
      <h2 className="section-title">Recently Listed</h2>
      { recentItemList }
    </section>
  );
}

function RecentlyListedItem() {
  const { data, error, isLoading } = useRecentItemListQuery();

  return (
    <div className="recently-listed-items-container">
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
    </div>
  )
}

function RecentlyListedCars() {
  const { data, error, isLoading } = useRecentCarsListQuery();

  return (
    <div className="recently-listed-items-container">
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
    </div>
  );
}

function RecentlyListedAccomodation() {
  const { data, error, isLoading } = useRecentAccomodationQuery();
  return (
    <div className="recently-listed-items-container-long">
      {data?.map((item) => {
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
    </div>
  );
}

export default RecentlyListed;
