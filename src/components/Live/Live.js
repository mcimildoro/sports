import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { URL_API } from "../../utils/constants";
import "./Live.scss";
import Loading from "./../Loading/Loading";

export default function Live() {
  const { id } = useParams();
  const [live, setLive] = useState([]);
  const { abbreviation, name, season, seasonDisplay, standings } = live;

  useEffect(() => {
    if (id) {
      getLive(id);
    }
  }, [id]);

  const getLive = async (id) => {
    try {
      const response = await axios.get(`${URL_API}/leagues/${id}/standings?season=2021`);
      setLive(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  if(!id) {
    return <Loading />
  }


  return (
    <>
      <h1>Live</h1>
      <div className="container">
        {abbreviation}
        {name}
        {season}
        {seasonDisplay}
        {standings && standings.map((standings) => (
          <div key={standings.id}>
            {standings.team.name}
            {/* {standings.team.shortDisplayName}
            {standings.team.location}
            {standings.team.abbreviation} */}
            {standings.stats && standings.stats.map((stat) => {
              return (
                <div>
                  {stat.name}
                  {stat.displayValue}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </>
  );
}
