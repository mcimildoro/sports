import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { URL_API } from "../../utils/constants";
import axios from "axios";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
//import { getData } from "./../Apis/Services";

import Loading from "../Loading/Loading";

import "./Leagues.scss";

const Leagues = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  useEffect(() => {
    getData(setData());
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(`${URL_API}/leagues`);
      setData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (id) => {
    navigate(`/live/${id}`);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <div>
        <h1 className="table-title">Leagues</h1>
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
    </Box>
  );
};

export default Leagues;
