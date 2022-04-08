import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { URL_API } from "../../utils/constants";
import axios from "axios";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import Loading from "./../Loading/Loading";

import "./Leagues.scss";

export default function Leagues() {
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(`${URL_API}/leagues`);
      setData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleClick = (id) => {
    navigate(`/live/${id}`);
  }

  if(!data.length) {
    return <Loading />
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid className="container" container spacing={1}>
        {data.map((data) => (
          <Grid key={data.id} item xs={3} md={3}>
            <img
              src={data.logos.light}
              alt="#"
              onClick={() => handleClick(data.id)}
            />
            <h2>{data.name}</h2>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
