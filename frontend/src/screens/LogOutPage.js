import React from "react";
import "./LogOutPage.css";
import {Link} from "react-router-dom";
const LogOutPage = () => {
  return (
    <div>
      <h1>
        Welcome <span className="user__name">Customer</span>
        <Link to="/">
        <button className="logout__button">Logout</button>
        </Link>
      </h1>
    </div>
  );
};

export default LogOutPage;
