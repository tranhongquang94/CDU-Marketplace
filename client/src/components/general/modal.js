import React from "react";
import { IoClose } from "react-icons/io5";
import { usePostAccountLoginMutation } from "../../redux/account/accountLoginAPI";
import { usePostAccountRegisterMutation } from "../../redux/account/accountRegisterAPI";

function Modal({ tabOpen, closeModal, changeTab, login, logout }) {
  const [postAccountLogin] = usePostAccountLoginMutation();
  const [postAccountRegister] = usePostAccountRegisterMutation();

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
            onSubmit={async (e) => {
              e.preventDefault();

              try {
                const res = await postAccountLogin({
                  username: document.getElementById("login-username").value,
                  password: document.getElementById("login-password").value,
                }).unwrap();
                const { mes, result } = res;

                if (mes) {
                  alert(mes);
                  if (result) {
                    login(result.username);
                    closeModal();
                  }
                }
              } catch (error) {
                console.error(error);
              }
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
            onSubmit={async (e) => {
              e.preventDefault();
              try {
                const res = await postAccountRegister({
                  username: document.getElementById("register-username").value,
                  password: document.getElementById("register-password").value,
                }).unwrap();
                const { mes, result } = res;

                if (mes) {
                  alert(mes);
                  if (result) {
                    login(result.username);
                    closeModal();
                  }
                }
              } catch (error) {
                console.error(error);
              }
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
