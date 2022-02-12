import React, { useState, useEffect } from "react";
import "./styles/App.scss";
import { NavBar, Footer } from "./components/general";
import {
  Homepage,
  Cars,
  Jobs,
  Accomodation,
  NewItem,
  SingleItem,
  SearchResult,
} from "./pages";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { data } from "./components/data/data.js";
import { useSelector, useDispatch } from "react-redux";
import { setScreenWidth } from "./redux/slice/screenWidthSlice";
import { close } from "./redux/slice/dropDownSlice";

function App() {
  const screenWidth = useSelector((state) => state.screenWidth);
  const dispatch = useDispatch();
  const handleClick = (e) => {
    if (
      e.target.className !== "search-query-input" &&
      e.target.className !== "dropdown-container"
    ) {
      dispatch(close(false));
    }
  };

  useEffect(() => {
    const setWidth = () => {
      dispatch(setScreenWidth(window.innerWidth));
    };
    setWidth();
    window.addEventListener("resize", setWidth);
    return () => window.removeEventListener("resize", setWidth);
  }, [screenWidth, dispatch]);

  return (
    <Router>
      <div className="App" onClick={handleClick}>
        <header>
          <NavBar />
        </header>

        <Switch>
          <Route exact path="/">
            <Homepage
              heroCover={data.hero.image.homepage}
              searchCategories={data.navbar}
            />
          </Route>

          <Route path="/cars">
            <Cars
              heroCover={data.hero.image.cars}
              brand={data.brand}
              vehicleTypes={data.vehicleTypes}
            />
          </Route>

          <Route path="/jobs">
            <Jobs
              heroCover={data.hero.image.jobs}
              searchCategories={data.jobsCategories}
            />
          </Route>

          <Route path="/accomodation">
            <Accomodation
              heroCover={data.hero.image.accomodation}
              searchCategories={data.accomodationCategories}
            />
          </Route>

          <ProtectedRoute path="/newItem" component={NewItem} data={data} />

          <Route path="/item/:id">
            <SingleItem
              heroCover={data.hero.image.homepage}
              searchCategories={data.navbar}
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
function ProtectedRoute({ component: Component, path: newItemPath, ...rest }) {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  return (
    <Route
      path={newItemPath}
      render={() =>
        isLoggedIn ? <Component {...rest} /> : <Redirect path="/" />
      }
    />
  );
}

export default App;
