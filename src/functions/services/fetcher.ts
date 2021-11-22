import axios, { AxiosResponse } from "axios";

import { Results } from "./types";

// Get Dummy User Data List Here
export const getUsers = () => {
  return axios
    .get("https://randomuser.me/api/?results=30")
    .then((res: AxiosResponse<Results>) => {
      return res.data;
    });
};
