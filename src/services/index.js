import axios from "axios";

export const apiData = () => {
  return axios.get("https://odapi.herokuapp.com/");
};

// "http://localhost:9999/products"
