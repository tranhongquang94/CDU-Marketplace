import React from "react";
import { Hero, Searchbar, RecentlyListed } from "../components/general";
import {
  PopularDestination,
  AccomodationType,
} from "../components/specific/accomodation";

function Accomodation({ heroCover, searchCategories }) {
  return (
    <>
      <Hero page="accomodation" cover={heroCover} />
      <Searchbar page="accomodation" searchCategories={searchCategories} />
      <main>
        <PopularDestination />
        <RecentlyListed />
        <AccomodationType />
      </main>
    </>
  );
}

export default Accomodation;
