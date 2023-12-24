import React from "react";

import Navigation from "./Navigation";
import classes from "./MainHeader.module.css";
import { useContext } from "react";
import authContext from "../../store/authContext";
const MainHeader = (props) => {
  const ctx = useContext(authContext);
  return (
    <header className={classes["main-header"]}>
      <h1>A Typical Page</h1>
      <Navigation isLoggedIn={props.isAuthenticated} onLogout={ctx.onLogout} />
    </header>
  );
};

export default MainHeader;
