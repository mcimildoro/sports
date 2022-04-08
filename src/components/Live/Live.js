import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { URL_API } from "../../utils/constants";
import "./Live.scss";
import Loading from "./../Loading/Loading";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

export default function Live() {
  const { id } = useParams();
  const [live, setLive] = useState([]);
  const { name, seasonDisplay, standings } = live;

  useEffect(() => {
    if (id) {
      getLive(id);
    }
  }, [id]);

  const getLive = async (id) => {
    try {
      const response = await axios.get(
        `${URL_API}/leagues/${id}/standings?season=2021`
      );
      setLive(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(live);
  //console.log(standings);
  return (
    <>
      <h1>{name}</h1>
      <span>{seasonDisplay}</span>
      <Divider orientation="horizontal" flexItem />
      <Box sx={{ flexGrow: 2, width: "100%" }}>
        <Grid columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {standings &&
            standings.map((standings) => (
              <Grid key={standings.team.id} item xs={12} sm={6} md={4}>
                <div className="table_box" key={standings.team.id}>
                  <h3>{standings.team.name}</h3>
                  {standings.notes &&
                    standings.notes.map(() => {
                      //console.log(standings);
                      return (
                        <div className="table_box__stats">
                          <span>{standings.notes.name}</span>
                        </div>
                      );
                    })}
                  {standings.stats &&
                    standings.stats.map((stat) => {
                      //console.log(stat);
                      return (
                        <div className="table_box__stats">
                          <span>{stat.name}</span>
                          <span>{stat.displayValue}</span>
                        </div>
                      );
                    })}
                </div>
              </Grid>
            ))}
        </Grid>
      </Box>
    </>
  );
}
