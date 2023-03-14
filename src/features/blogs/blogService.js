import axios from "axios";
import { tokenConfig } from "../../utils/tokenConfig";
import { baseURL } from "../../utils/baseURL";

const getBlogs = async () => {
  const response = await axios.get(`${baseURL}blog/`);
  return response.data;
};

const createBlog = async (blog) => {
  const response = await axios.post(`${baseURL}blog/`, blog, tokenConfig);
  return response.data;
};

const getBlog = async (id) => {
  const response = await axios.get(`${baseURL}blog/${id}`, tokenConfig);
  return response.data;
};

const updateBlog = async (blog) => {
  const response = await axios.put(
    `${baseURL}blog/${blog.id}`,
    { title: blog.data.title, description: blog.data.description },
    tokenConfig
  );
  return response.data;
};

export const blogService = { getBlogs, createBlog, getBlog, updateBlog };
