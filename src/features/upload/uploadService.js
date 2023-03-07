import axios from "axios";
import { tokenConfig } from "../../utils/tokenConfig";
import { baseURL } from "../../utils/baseURL";

const uploadImages = async (data) => {
  const response = await axios.post(`${baseURL}upload/`, data, tokenConfig);
  return response.data;
};

export const uploadService = { uploadImages };
