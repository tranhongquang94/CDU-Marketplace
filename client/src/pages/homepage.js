import React from "react";
import { Hero, Searchbar, RecentlyListed } from "../components/general";
import { FeatureCategories, ItemList } from "../components/specific/homepage";

function Homepage({ heroCover, searchCategories }) {
  return (
    <>
      <Hero page="homepage" cover={heroCover} />
      <Searchbar page="homepage" searchCategories={searchCategories} />
      <main>
        <RecentlyListed />
        <FeatureCategories />
        <ItemList page="homepage" />
      </main>
    </>
  );
}

export default Homepage;
