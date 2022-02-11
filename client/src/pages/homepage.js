import React from 'react';
import { Hero, Searchbar, RecentlyListed } from "../components/general";
import { FeatureCategories, ItemList} from "../components/specific/homepage";

function Homepage({
  heroCover,
  searchCategories,
  closedDropDown,
  setClosedDropDown,
  isLoggedIn,
}) {
  return (
    <>
      <Hero
        page="homepage"
        cover={heroCover}
        isLoggedIn={isLoggedIn}
      />
      <Searchbar
        page="homepage"
        searchCategories={searchCategories}
        closedDropDown={closedDropDown}
        setClosedDropDown={setClosedDropDown}
      />
      <main>
        <RecentlyListed />
        <FeatureCategories />
        <ItemList page="homepage" />
      </main>
    </>
  );
}

export default Homepage
