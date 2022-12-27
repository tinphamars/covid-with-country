import axios from "axios";

export const CustomApi = async () => {
  return axios.create({
    baseURL: "https://api.covid19api.com",
  });
};



export const CustomApi2 = async () => {
  return axios.create({
    baseURL: "https://restcountries.com/v3.1/alpha",
  });
};
