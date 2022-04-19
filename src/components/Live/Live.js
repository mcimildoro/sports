import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { URL_API } from "../../utils/constants";
import "./Live.scss";


import Loading from "./../Loading/Loading";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from '@mui/material/Typography';

const Live = () => {
  const { id } = useParams();
  const [live, setLive] = useState([]);
  const [loading, setLoading] = useState(true);

  const { name, seasonDisplay, standings } = live;

  useEffect(() => {
    if (id) {
      getLive(id);
    }
  }, [id]);

  useEffect(() => {
    if (live.standings) {
      setLoading(false);
    }
  }, [live]);

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

  return (
    <>
      <Typography variant="h3" className="table-title">
        {name}{" "}{seasonDisplay}
      </Typography>
      <Divider orientation="horizontal" flexItem />
      <TableContainer className="table_box">
        {loading ? (
          <Loading />
        ) : (
          standings && (
            <Table>
              <TableHead className="thead">
                <TableRow className="__title">
                  <TableCell>Teams</TableCell>
                  
                  {
                  standings[0].stats.slice(0, 7).map((header) => {
                    return (
                      <TableCell key={header.description + header.abbreviation}>
                        {header.displayName}
                      </TableCell>
                    );
                  })}
                </TableRow>
              </TableHead>
              <TableBody className="tbody">
                {standings.map((standings) => (
                  <TableRow key={standings.team.id}>
                    {standings.team.logos ? (
                      <TableCell className="team-image">
                        <td>
                          <img
                            src={standings.team.logos[0].href}
                            alt={standings.team.name}
                          />
                        </td>
                      </TableCell>
                    ) : (
                      <TableCell>{standings.team.name}</TableCell>
                    )}

                    {standings.stats.slice(0, 7).map((stat) => {
                        return (
                          <TableCell key={stat.description + stat.abbreviation}>
                            {stat.displayValue}
                          </TableCell>
                        );
                      })}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )
        )}
      </TableContainer>
      <Stack className="button-back-home" spacing={2} direction="row">
        <Button
          sx={{ backgroundColor: "#4682B4", textTransform: "none" }}
          variant="contained"
          href="/"
        >
          Home
        </Button>
      </Stack>
    </>
  );
};

export default Live;
