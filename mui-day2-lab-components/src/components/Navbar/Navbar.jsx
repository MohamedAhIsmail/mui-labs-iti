import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
// import { CartContext } from "../../Context/CartContext/CartContext";
import { TokenContext } from "../../Context/TokenContext/TokenContext";
import { useSelector } from "react-redux";

export default function Navbar() {
  
  // let { count } = useContext(CartContext);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  

  let { token, setToken } = useContext(TokenContext);

  let navigate = useNavigate();

  function logOut() {
    localStorage.removeItem("userToken");
    setToken(null);
    navigate("/login");
  }

  return (
    <nav className="navbar navbar-expand-lg bg-white ">
      <div className="container">
        <NavLink to={"/"} className="navbar-brand fs-2">
          SHOPINGO
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0 gap-2">
            <li className="nav-item">
              <NavLink to={"/"} className="nav-link" aria-current="page">
                <i className="fa-solid fa-house"></i>Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/categories"} className="nav-link">
                <i className="fa-solid fa-store"></i>Categories
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/about"} className="nav-link">
                <i className="fa-solid fa-info"></i>About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/contact"} className="nav-link">
                <i className="fa-solid fa-phone"></i>Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/custom-hook"} className="nav-link">
              <i className="fa-solid fa-anchor"></i>Custom Hook
              </NavLink>
            </li>
          </ul>

          <div className="user">
            <ul className="navbar-nav d-flex gap-2 m-0">
              {token ? (
                <>
                  <li>
                    <p onClick={logOut} className="nav-link m-0 logOut">
                      <i className="fa-solid fa-right-to-bracket"></i>Log out
                    </p>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink to={"register"} className="nav-link">
                      <i className="fa-solid fa-user-plus"></i>Register
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={"login"} className="nav-link">
                      <i className="fa-solid fa-right-to-bracket"></i>Login
                    </NavLink>
                  </li>
                </>
              )}

              <li>
                <NavLink to={"/cart"} className="nav-link">
                  <div className="cart">
                    <div className="counter">{totalQuantity}</div>
                    <i className="fa-solid fa-cart-shopping"></i>
                  </div>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
