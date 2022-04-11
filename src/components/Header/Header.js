import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import footballImage from "../../assets/img/football.png";
import "./Header.scss";

const Header = () => {
  return (
    <AppBar sx={{ bgcolor: "#2F4F4F" }} position="relative" className="header">
      <Toolbar className="container-fluid">
        <img src={footballImage} alt="Football"></img>
        <h3>Sports App</h3>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
