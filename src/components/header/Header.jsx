import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout, getData } from "../../redux/loginSlice";
import "./header.css";

function Header() {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.login.isLogged);
  const name = useSelector((state) => state.login.name);
  console.log(isLogged);
  const Authenticated = () => (
    <>
      <Link
        to="/login"
        onClick={() => dispatch(logout())}
        className="menu-item-link"
      >
        {name}, Logout
      </Link>
    </>
  );
  const NotAuthenticated = () => (
    <>
      <Link to="/register" className="menu-item-link">
        Register
      </Link>
      <Link to="/login" className="menu-item-link">
        Login
      </Link>
    </>
  );

  useEffect(() => {}, []);
  return (
    <div className="header">
      <div className="logo">
        <h1>Redux Toolkit</h1>
      </div>
      <nav>
        <div className="menu">
          <div>
            <Link to="/" className="menu-item-link">
              Home
            </Link>
            <Link to="/profile" className="menu-item-link">
              Profile
            </Link>
          </div>

          <div className="login">
            {isLogged ? <Authenticated /> : <NotAuthenticated />}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
