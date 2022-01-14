import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/reducers/userReducers";
import "./LogInPage.css";
import LogOutPage from "./LogOutPage";
import { Link } from "react-router-dom";

const LogInPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      login({
        name: name,
        email: email,
        password: password,
        loggedIn: true,
      })
    );
  };

  return (
    <div classname="login">
      <form className="login__form" onSubmit={(e) => handleSubmit(e)}>
        <h1>Login here 🚪</h1>
        <input
          type="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link to="logout">
          <button type="submit" className="submit__btn">
            Submit
          </button>
        </Link>
      </form>
    </div>
  );
};

export default LogInPage;
