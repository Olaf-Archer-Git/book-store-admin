import axios from "axios";
import { tokenConfig } from "../../utils/tokenConfig";
import { baseURL } from "../../utils/baseURL";

const getAllCategories = async () => {
  const response = await axios.get(`${baseURL}category/`);
  return response.data;
};

const createCategory = async (category) => {
  const response = await axios.post(
    `${baseURL}category/`,
    category,
    tokenConfig
  );
  return response.data;
};

export const categoryService = { getAllCategories, createCategory };
