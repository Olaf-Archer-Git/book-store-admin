import axios from "axios";
import { tokenConfig } from "../../utils/tokenConfig";
import { baseURL } from "../../utils/baseURL";

const getProducts = async () => {
  const response = await axios.get(`${baseURL}product/`);
  return response.data;
};

const createProduct = async (product) => {
  const response = await axios.post(`${baseURL}product/`, product, tokenConfig);
  return response.data;
};

export const productService = { getProducts, createProduct };
