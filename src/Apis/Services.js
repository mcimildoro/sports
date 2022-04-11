import React from "react";


export const getLive = async (id) => {
  try {
    const response = await axios.get(
      `${URL_API}/leagues/${id}/standings?season=2021`
    );
    setLive(response.data.data);
  } catch (error) {
    console.log(error);
    setError(true);
  }
};

export const getData = async (setData) => {
  try {
    const response = await axios.get(`${URL_API}/leagues`);
    setData(response.data.data);
  } catch (error) {
    console.log(error);
  }
};
