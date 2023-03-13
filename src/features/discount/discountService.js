import axios from "axios";
import { tokenConfig } from "../../utils/tokenConfig";
import { baseURL } from "../../utils/baseURL";

export const getDiscounts = async () => {
  const response = await axios.get(`${baseURL}discount`, tokenConfig);
  return response.data;
};

export const createDiscount = async (discountData) => {
  const response = await axios.post(
    `${baseURL}discount`,
    discountData,
    tokenConfig
  );
  return response.data;
};

export const deleteDiscount = async (discountId) => {
  const response = await axios.delete(
    `${baseURL}discount/${discountId}`,
    tokenConfig
  );
  return response.data;
};

export const discountService = {
  getDiscounts,
  createDiscount,
  deleteDiscount,
};
