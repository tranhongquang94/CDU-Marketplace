import React, { useState, useEffect } from "react";
import "./styles/App.scss";
import { NavBar, Footer} from "./components/general";
import { Homepage, Cars, Jobs, Accomodation, NewItem, SingleItem, SearchResult } from "./pages";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { data } from "./components/data/data.js";
import axios from "axios";
// import { Redirect, Switch } from "react-router";

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [itemList, setItemList] = useState([]);
  const [recentlyListed, setRecentlyListed] = useState([]);
  const [closedDropDown, setClosedDropDown] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");


  const handleClick = (e) => {
    if (e.target.className !== "search-query-input" && e.target.className !== "dropdown-container") {
      setClosedDropDown(true);
    }
  }

  useEffect(() => {
    const setWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    setWidth();
    window.addEventListener("resize", setWidth);
    return () => window.removeEventListener("resize", setWidth);
  }, [screenWidth]);

  useEffect(() => {
    // Get data from database by calling to server API.
    axios
      .get("/item")
      .then(res => {
        setItemList(res.data);
      })
      .catch(err => console.log(err));

    axios
      .get("/item/recent")
      .then(res => {
        setRecentlyListed(res.data);
      })
      .catch(err => console.log(err))
  }, []);

  

  return (
    <Router>
      <div className="App" onClick={handleClick}>
        <header>
          <NavBar
            screenWidth={screenWidth}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            username={username}
            setUsername={setUsername}
          />
        </header>

        <Switch>
          <Route exact path="/">
            <Homepage
              screenWidth={screenWidth}
              heroCover={data.hero.image.homepage}
              searchCategories={data.navbar}
              recentlyListed={recentlyListed}
              itemList={itemList}
              closedDropDown={closedDropDown}
              setClosedDropDown={setClosedDropDown}
              isLoggedIn={isLoggedIn}
            />
          </Route>

          <Route path="/cars">
            <Cars
              screenWidth={screenWidth}
              heroCover={data.hero.image.cars}
              brand={data.brand}
              vehicleTypes={data.vehicleTypes}
              isLoggedIn={isLoggedIn}
            />
          </Route>

          <Route path="/jobs">
            <Jobs
              screenWidth={screenWidth}
              heroCover={data.hero.image.jobs}
              searchCategories={data.jobsCategories}
              closedDropDown={closedDropDown}
              setClosedDropDown={setClosedDropDown}
              isLoggedIn={isLoggedIn}
            />
          </Route>

          <Route path="/accomodation">
            <Accomodation
              screenWidth={screenWidth}
              heroCover={data.hero.image.accomodation}
              searchCategories={data.accomodationCategories}
              recentlyListed={recentlyListed}
              closedDropDown={closedDropDown}
              setClosedDropDown={setClosedDropDown}
              isLoggedIn={isLoggedIn}
            />
          </Route>

          <ProtectedRoute
            path="/newItem"
            component={NewItem}
            data={data}
            username={username}
            isLoggedIn={isLoggedIn}
          />

          <Route path="/item/:id">
            <SingleItem
              heroCover={data.hero.image.homepage}
              searchCategories={data.navbar}
              closedDropDown={closedDropDown}
              setClosedDropDown={setClosedDropDown}
              isLoggedIn={isLoggedIn}
            />
          </Route>

          <Route path="/searchresults">
            <SearchResult />
          </Route>
        </Switch>

        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

// Can only view this NewItem component by logging in
function ProtectedRoute ({component: Component, path: newItemPath, isLoggedIn,...rest}) {
  return (
    <Route path={newItemPath} render={() =>(
        isLoggedIn ?
        <Component {...rest}/> :
        <Redirect path="/"/>
      ) 
    }/>
  )
}

export default App;
