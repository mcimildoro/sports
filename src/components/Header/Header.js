import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import imagen from "../../assets/img/football.png";
import "./Header.scss";

export default function Header() {
  return (
    <AppBar className="header">
      <Toolbar className="container-fluid">
        <img src={imagen} alt="Football"></img>
        <h3>Sports App</h3>
      </Toolbar>
    </AppBar>
  );
}
