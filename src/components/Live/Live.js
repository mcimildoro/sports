import React, { useState, useEffect } from "react";
import axios from "axios";
import { URL_API } from "../../utils/constants";
import "./Live.scss";

export default function Live(props) {
  
  console.log(props);
  const [live, setLive] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: `${URL_API}/leagues/ita.1/standings?season=2020`,
    })
      .then((res) => {
        //console.log(res);
      })
      .catch((e) => console.log(e));
  }, []);

  return <div></div>;
}
