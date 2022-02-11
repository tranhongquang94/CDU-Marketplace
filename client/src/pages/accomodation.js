import React from "react";
import { Hero, Searchbar, RecentlyListed } from "../components/general";
import {
  PopularDestination,
  AccomodationType,
} from "../components/specific/accomodation";

function Accomodation({
  heroCover,
  searchCategories,
  closedDropDown,
  setClosedDropDown,
  isLoggedIn,
}) {
  return (
    <>
      <Hero page="accomodation" cover={heroCover} isLoggedIn={isLoggedIn} />
      <Searchbar
        page="accomodation"
        searchCategories={searchCategories}
        closedDropDown={closedDropDown}
        setClosedDropDown={setClosedDropDown}
      />
      <main>
        <PopularDestination />
        <RecentlyListed />
        <AccomodationType />
      </main>
    </>
  );
}

export default Accomodation;
