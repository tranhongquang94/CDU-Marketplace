import React from "react";
import { Hero, Searchbar, RecentlyListed } from "../components/general";
import { Brand, VehicleTypes } from "../components/specific/cars";

function Cars({ heroCover, brand, vehicleTypes }) {
  return (
    <>
      <Hero page="cars" cover={heroCover} />
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
