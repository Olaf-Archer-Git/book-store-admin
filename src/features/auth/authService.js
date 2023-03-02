import axios from "axios";
import { base_url } from "../../utils/base_url";

const login = async (user) => {
  const response = await axios.post(`${base_url}user/login-admin`, user);

  if (response.data) {
    //save user state to local storage
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

export const authService = { login };
