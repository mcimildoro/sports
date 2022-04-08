import React, { useEffect, useState } from "react";
import { URL_API } from "../../utils/constants";
//import { Link } from "react-router-dom";
import axios from "axios";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import Loading from "./../Loading/Loading";

import "./Leagues.scss";

export default function Leagues(props) {
  
  const [data, setData] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: `${URL_API}/leagues`,
    })
      .then((res) => {
        // console.log(res.data.data);
        setData(res.data.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid className="container" container spacing={1}>
        {data.map((data) => (
          <Grid key={data.id} item xs={3} md={3}>
            <img
              src={data.logos.light}
              alt="#"
              onClick={() => console.log(data.id)}
            />
            <h2>{data.name}</h2>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
