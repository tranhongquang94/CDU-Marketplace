import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaLocationArrow } from "react-icons/fa";
import { BiSearchAlt2 } from "react-icons/bi";
import Select from "react-select";
import { data } from "../data/data";
import axios from "axios";
import {Link} from 'react-router-dom'; 

function Searchbar({
  page,
  searchCategories,
  closedDropDown,
  setClosedDropDown,
}) {
  const [currentMake, setCurrentMake] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [queryResult, setQueryResult] = useState([]);

  const { carMakeAndModel } = data;

  //Get list of car make from object keys.
  const makeList = Object.keys(carMakeAndModel);

  const allCategories = searchCategories?.mainMenu?.concat(
    searchCategories?.dropdown
  );

  //Create suitable object for react-select choices.
  const generateCategories = (categories) => {
    let options = [];
    if (categories) {
      categories.forEach((category) => {
        options.push({ value: category.toLowerCase(), label: category });
      });
      return options;
    }
    return;
  };

  //Generate price array object for cars search bar
  const generatePriceArr = (min, max, length) => {
    let result = [];
    result.push({ value: min, label: min });
    for (let i = 1; i <= length; i++) {
      result.push({
        value: (max / length) * i,
        label: ((max / length) * i).toLocaleString(),
      });
    }
    result.push({ value: max, label: max.toLocaleString() });
    return result;
  };

  const handleQueryChange = (e) => {
    if (!e.target.value) {
      setQueryResult([]);
      setSearchQuery("");
      return;
    }
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log(e.target)
  };

  //Run everytime search query changes
  useEffect(() => {
    let source = axios.CancelToken.source();
    if (searchQuery) {
      axios
        .post(
          "/item/suggest",
          { data: searchQuery },
          { cancelToken: source.token }
        )
        .then((res) => {
          setQueryResult(res.data);
          setClosedDropDown(false);
          
        })
        .catch((err) => {
          if (axios.isCancel(err)) {
            return;
          } else {
            console.log(err);
          }
        });
    }

    return () => {
      source.cancel("Canceled due to new request.");
    };
  }, [searchQuery]);

  return (
    <div className="searchbar-container">
      <form
        action="/searchresults"
        className={`search-form ${page}`}
        method="GET"
        onSubmit={handleSubmit}
      >
        {page === "homepage" && (
          <>
            <div className="on-homepage">
              <SearchCategories categories={allCategories} />
            </div>
            <SearchQuery
              handleQueryChange={handleQueryChange}
              queryResult={queryResult}
              searchQuery={searchQuery}
              closedDropDown={closedDropDown}
            />
          </>
        )}

        {page === "cars" && (
          <>
            <label className="label">Make and Model:</label>
            <Make
              makeList={makeList}
              generateCategories={generateCategories}
              setCurrentMake={setCurrentMake}
            />
            <Model
              generateCategories={generateCategories}
              currentMake={currentMake}
              carMakeAndModel={carMakeAndModel}
            />
            <label className="label">Price range: </label>
            <Price generatePriceArr={generatePriceArr} />
          </>
        )}

        {page === "jobs" && (
          <>
            <SearchQuery
              handleQueryChange={handleQueryChange}
              queryResult={queryResult}
              searchQuery={searchQuery}
              closedDropDown={closedDropDown}
            />
            <SearchCategories categories={searchCategories} />
          </>
        )}

        {page === "accomodation" && (
          <>
            <SearchQuery
              handleQueryChange={handleQueryChange}
              queryResult={queryResult}
              searchQuery={searchQuery}
              closedDropDown={closedDropDown}
            />
            <SearchCategories categories={searchCategories} />
          </>
        )}

        <SearchLocation />
        <button type="submit" className="btn cta-btn search-btn">
          <BiSearchAlt2 className="search-icon" />
        </button>
      </form>
    </div>
  );
}

//Single individual sub components for searchbar

const SearchCategories = ({ categories }) => {
  return (
    <select name="categories" className="categories-list">
      {categories.map((category) => {
        return (
          <option key={category} value={category}>
            {category}
          </option>
        );
      })}
    </select>
  );
};

const SearchQuery = ({ handleQueryChange, queryResult, searchQuery, closedDropDown }) => {
  
  return (
    <>
      <div className="search-query">
        <AiOutlineSearch className="search-logo" />
        <input
          type="text"
          name="search-query"
          value={searchQuery}
          className="search-query-input"
          placeholder="I'm looking for..."
          onChange={handleQueryChange}
        />
      {(queryResult.length !== 0 && closedDropDown === false) && <DropDown queryResult={queryResult} />}
      </div>
    </>
  );
};

const SearchLocation = () => {
  return (
    <div className="location">
      <FaLocationArrow className="location-logo" />
      <input
        type="text"
        name="location"
        className="location-input"
        placeholder="Your location..."
      />
    </div>
  );
};

const Make = ({ makeList, generateCategories, setCurrentMake }) => {
  return (
    <Select
      defaultValue={{ value: "", label: "Make" }}
      options={generateCategories(makeList)}
      onChange={(selectedOption) => setCurrentMake(selectedOption.label)}
    />
  );
};

const Model = ({ generateCategories, currentMake, carMakeAndModel }) => {
  return (
    <Select
      defaultValue={{ value: "", label: "Model" }}
      options={generateCategories(carMakeAndModel[currentMake])}
    />
  );
};

const Price = ({ generatePriceArr }) => {
  return (
    <>
      <Select
        defaultValue={{ value: "", label: "Min" }}
        options={generatePriceArr(0, 1000000, 20)}
      />
      <Select
        defaultValue={{ value: "", label: "Max" }}
        options={generatePriceArr(0, 1000000, 20)}
      />
    </>
  );
};


const DropDown = ({queryResult}) => {
  return (
    <ul className="dropdown-container">
      {queryResult.map((query) => (
        <Link to={`item/${query._id}`} key={query._id}>
          <li>{query.name}</li>
        </Link>
      ))}
    </ul>
  );
};

export default Searchbar;
