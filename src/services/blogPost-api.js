import axios from "axios";

// Connect to backend Server

const base_URL = "http://localhost:3001/blogPost";


export const getPost = async () => {
  try {
    const response = await axios.get(base_URL);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const createPost = async (data) => {
  try {
    const response = await axios.post(base_URL, data);
    return response;
  } catch (error) {
    console.error(error);
  }
};
