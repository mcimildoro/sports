import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { URL_API } from "../../utils/constants";
import axios from "axios";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from '@mui/material/Typography';

import "./Leagues.scss";

const Leagues = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const getData = async () => {
    try {
      const response = await axios.get(`${URL_API}/leagues`);
      setData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData(setData());
  }, []);

  const handleClick = (id) => {
    navigate(`/live/${id}`);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    handleInput(e);
  };

  const handleInput = (e) => {
    if (e.target.value === null || e.target.value === "") {
      getData(setData());
    } else {
      const filteredData = data.filter((item) => {
        return item.name.toLowerCase().includes(e.target.value.toLowerCase());
      });
      setData(filteredData);
    }
  };

  return (
    <>
      <div className="search-box">
        <Typography variant="h3" className="table-title">Competition Standings</Typography>
        <TextField
          value={search}
          id="outlined-basic"
          variant="outlined"
          onChange={(e) => handleSearch(e)}
          label="Find your league"
        />
      </div>

      <div className="container">
        {data &&
          data.map((data) => (
            <Grid key={data.id}>
              <img
                src={data.logos.light}
                alt="#"
                onClick={() => handleClick(data.id)}
              />
              <h4>{data.name}</h4>
            </Grid>
          ))}
      </div>
    </>
  );
};

export default Leagues;
