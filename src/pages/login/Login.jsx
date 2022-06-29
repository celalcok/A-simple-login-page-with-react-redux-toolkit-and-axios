import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { useNavigate } from "react-router-dom";
import { login, getData } from "../../redux/loginSlice";
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isLogged = useSelector((state) => state.login.isLogged);
  const state = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginData = {
    email: email,
    password: password,
  };

  useEffect(() => {}, []);
  return (
    <div>
      <Header />
      <div className="page login">
        <h1>Login</h1>
        <h2>{isLogged}</h2>
        <div className="form">
          <div className="input-group">
            <label htmlFor="username">Username: </label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="text"
              name="username"
              id="username"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="username">Password: </label>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              name="password"
              id="password"
              required
            />
          </div>
          <button
            onClick={() => {
              dispatch(login(loginData));
                    navigate("/");
            }}
          >
            Login
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
