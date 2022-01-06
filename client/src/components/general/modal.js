import React from "react";
import { IoClose } from "react-icons/io5";
import axios from "axios";

function Modal({ tabOpen, closeModal, changeTab, login, logout }) {
  return (
    <div className="overlay">
      <div className="modal-container">
        <div className="tab-container">
          <span
            className={tabOpen === "Sign In" ? "active" : ""}
            onClick={(e) => changeTab(e.target.textContent)}
          >
            Sign In
          </span>
          <span
            className={tabOpen === "Register" ? "active" : ""}
            onClick={(e) => changeTab(e.target.textContent)}
          >
            Register
          </span>
        </div>

        {tabOpen === "Sign In" && (
          <form
            action=""
            className="login-form"
            onSubmit={(e) => {
              e.preventDefault();
              axios
                .post("/account/login", {
                  username: document.getElementById("login-username").value,
                  password: document.getElementById("login-password").value,
                })
                .then((res) => {
                  if (res.data.mes) {
                    alert(res.data.mes);
                    login(res.data.result.username);
                    closeModal();
                  } else {
                    alert(res.data);
                  }
                })
                .catch((err) => {
                  alert(
                    "There is an issue with the request, please try again."
                  );
                });
            }}
          >
            <input
              type="text"
              name="username"
              id="login-username"
              placeholder="Username"
            />
            <input
              type="password"
              name="password"
              id="login-password"
              placeholder="Password"
            />
            <button type="submit" className="cta-btn btn">
              Log Me In
            </button>
          </form>
        )}

        {tabOpen === "Register" && (
          <form
            action=""
            className="register-form"
            onSubmit={(e) => {
              e.preventDefault();
              axios
                .post("/account/create", {
                  username: document.getElementById("register-username").value,
                  password: document.getElementById("register-password").value,
                })
                .then((res) => {
                  alert(res.data.mes);
                  login(res.data.result.username);
                  closeModal();
                })
                .catch((err) => {
                  alert(
                    "There is an issue with the request, please try again."
                  );
                });
            }}
          >
            <input
              type="text"
              name="username"
              id="register-username"
              placeholder="Username"
            />
            <input
              type="password"
              name="password"
              id="register-password"
              placeholder="Password"
            />
            <button type="submit" className="cta-btn btn">
              Join CDU Marketplace
            </button>
          </form>
        )}

        <IoClose className="close-modal-btn" onClick={closeModal} />
      </div>
    </div>
  );
}

export default Modal;
