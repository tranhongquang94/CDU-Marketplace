import React from "react";
import { Hero, Searchbar, RecentlyListed } from "../components/general";
import { Brand, VehicleTypes } from "../components/specific/cars";

function Cars({ heroCover, brand, vehicleTypes, isLoggedIn }) {
  return (
    <>
      <Hero page="cars" cover={heroCover} isLoggedIn={isLoggedIn} />
      <Searchbar page="cars" />
      <main>
        <Brand brand={brand} />
        <VehicleTypes vehicleTypes={vehicleTypes} />
        <RecentlyListed />
      </main>
    </>
  );
}

export default Cars;
