import axios from "axios";
import { tokenConfig } from "../../utils/tokenConfig";
import { baseURL } from "../../utils/baseURL";

const getAllOrders = async () => {
  const response = await axios.get(`${baseURL}order/all-orders`, tokenConfig);
  return response.data;
};

export const orderService = { getAllOrders };
