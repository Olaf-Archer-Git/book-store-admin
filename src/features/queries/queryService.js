import axios from "axios";
import { baseURL } from "../../utils/baseURL";

const getQueries = async () => {
  const response = await axios.get(`${baseURL}queries/`);
  return response.data;
};

export const queryService = { getQueries };
