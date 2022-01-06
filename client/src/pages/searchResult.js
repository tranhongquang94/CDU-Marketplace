import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { ItemCardLong } from "../components/general";

function SearchResult() {
  const [searchResults, setSearchResults] = useState([]);

  const { search } = useLocation();
  let query = new URLSearchParams(search);
  let searchQuery = query.get("search-query");

  useEffect(() => {
    if (searchQuery) {
      axios
        .get(`/item/list/${searchQuery}`)
        .then((res) => {
          setSearchResults(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
        
    } // If search box empty, get all items 
    else {
      axios.get("/item/")
      .then(res => setSearchResults(res.data))
      .catch(error => console.log(error))
    }
  },[searchQuery]);

  return (
    <main>
      <h2 className="title">Search Results</h2>
      <section className="search-results-container">
        {searchResults?.map((item) => {
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
      </section>
    </main>
  );
}

export default SearchResult;
