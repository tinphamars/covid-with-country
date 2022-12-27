import axios from "axios";
import {CustomApi,  CustomApi2 } from "./custom";

export const getCountry = async () => {
  const url = await CustomApi();
  try {
    const result = await url.get("summary");
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getCountryWithCode = async (code: string) => {
  const url = await CustomApi2();
  try {
    const result = await url.get(code);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
