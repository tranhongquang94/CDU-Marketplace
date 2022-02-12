import React, { useState, useEffect } from "react";
import Modal from "./modal";
import { Link } from "react-router-dom";
import { data } from "../data/data";
import { ReactComponent as MarketplaceLogo } from "../../images/logo/marketplace-logo.svg";
import { useSelector, useDispatch } from "react-redux";
import { userLogIn, userLogOut } from "../../redux/slice/userSlice";

function NavBar() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const username = useSelector((state) => state.user.username);
  const screenWidth = useSelector((state) => state.screenWidth);
  const dispatch = useDispatch();

  const { navbar } = data;
  const [menuItems, setMenuItems] = useState(navbar.mainMenu);
  const [dropdownItems, setDropdownItems] = useState(navbar.dropdown);
  const [modalState, setModalState] = useState({
    showModal: false,
    tabOpen: "",
  });

  const logIn = (username) => {
    dispatch(userLogIn(username));
  };

  const logOut = () => {
    dispatch(userLogOut(""));
  };

  const changeTab = (tab) => {
    setModalState({
      showModal: true,
      tabOpen: tab,
    });
  };

  const closeModal = () => {
    document.querySelector("body").style.overflow = "unset";
    setModalState({
      showModal: false,
      tabOpen: "",
    });
  };

  useEffect(() => {
    if (screenWidth <= 400) {
      setMenuItems([navbar.mainMenu[0]]);
      setDropdownItems(navbar.mainMenu.slice(1).concat(navbar.dropdown));
    } else if (screenWidth < 700) {
      setMenuItems(navbar.mainMenu.slice(0, 2));
      setDropdownItems(navbar.mainMenu.slice(2).concat(navbar.dropdown));
    } else if (screenWidth < 1000) {
      setMenuItems(navbar.mainMenu.slice(0, 3));
      setDropdownItems(navbar.mainMenu.slice(3).concat(navbar.dropdown));
    } else {
      setMenuItems(navbar.mainMenu);
      setDropdownItems(
        navbar.mainMenu.slice(navbar.mainMenu.length).concat(navbar.dropdown)
      );
    }
  }, [screenWidth]);

  useEffect(() => {
    const positionDropDownMenu = () => {
      const navbarHeight = document.querySelector("nav").clientHeight;
      document.querySelector(".dropdown-menu").style.top = `${navbarHeight}px`;
    };
    positionDropDownMenu();
  }, []);

  return (
    <nav>
      <div className="logo-container">
        <Link to="/">
          <MarketplaceLogo className="logo" />
        </Link>
      </div>

      <div className="main-menu-container">
        {menuItems.map((menuItem) => {
          const linkTo = menuItem.toLowerCase();
          /**
           * Note: need to have a slash "/" before the "to" props in Link in order for react-router to treat it as an absolute path, which means Link only add to href what defined in the "to" props (absolute path). Otherwise, it is gonna append the current location of the page (based on the route path) (relative path)
           */
          return (
            <Link to={`/${linkTo}`} key={linkTo}>
              {menuItem}
            </Link>
          );
        })}

        <div className="dropdown">
          More...
          <div className="dropdown-menu">
            {dropdownItems.map((item) => {
              const linkTo = item.toLowerCase();
              return (
                <Link key={item} to={`${linkTo}`}>
                  {item}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {!isLoggedIn && (
        <div className="personal-menu-container">
          <button
            id="sign-in-btn"
            className="btn cta-btn"
            onClick={() => {
              document.querySelector("body").style.overflow = "hidden";
              setModalState({
                showModal: true,
                tabOpen: "Sign In",
              });
            }}
          >
            Sign In
          </button>
          <button
            id="register-btn"
            className="btn"
            onClick={() => {
              document.querySelector("body").style.overflow = "hidden";
              setModalState({
                showModal: true,
                tabOpen: "Register",
              });
            }}
          >
            Register
          </button>
        </div>
      )}

      {isLoggedIn && (
        <>
          <span className="welcome-message">Hello, {username}</span>
          <button id="logout-btn" className="btn" onClick={logOut}>
            Log Out
          </button>
        </>
      )}

      {modalState.showModal && (
        <Modal
          tabOpen={modalState.tabOpen}
          closeModal={closeModal}
          changeTab={changeTab}
          login={logIn}
          logout={logOut}
        />
      )}
    </nav>
  );
}

export default NavBar;
