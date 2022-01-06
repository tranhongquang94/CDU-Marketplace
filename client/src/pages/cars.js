import React, { useState, useEffect } from "react";
import { Hero, Searchbar, RecentlyListed } from "../components/general";
import { Brand, VehicleTypes } from "../components/specific/cars";
import axios from "axios";

function Cars({ heroCover, brand, vehicleTypes, isLoggedIn }) {
  const [recentlyListedCars, setRecentlyListedCars] = useState([]);
  useEffect(() => {
    axios
      .get("item/recent/cars")
      .then((res) => setRecentlyListedCars(res.data))
      .catch((err) => console.log(err));
  },[]);
  return (
    <>
      <Hero page="cars" cover={heroCover} isLoggedIn={isLoggedIn} />
      <Searchbar page="cars" />
      <main>
        <Brand brand={brand} />
        <VehicleTypes vehicleTypes={vehicleTypes} />
        <RecentlyListed data={recentlyListedCars} />
      </main>
    </>
  );
}

export default Cars;
