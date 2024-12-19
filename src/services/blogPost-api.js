import axios from "axios";

// Connect to backend Server
const base_URL = import.meta.env.VITE_BACKEND_URL;

// Display All
export const getAllPost = async () => {
  try {
    const response = await axios.get(base_URL);
    return response;
  } catch (error) {
    console.error(error);
  }
};

// Display one
export const getPost = async (id) => {
  try {
    const response = await axios.get(`${base_URL}/${id}`);
    return response;
  } catch (error) {
    console.error(error);
  }
};

// Edit Post
export const editPost = async (id, updatedPost) => {
  try {
    const response = await axios.put(`${base_URL}/${id}`, updatedPost);
    return response;
  } catch (error) {
    console.error(error);
  }
};

// Create Post
export const createPost = async (data) => {
  try {
    const response = await axios.post(base_URL, data);
    return response;
  } catch (error) {
    console.error(error);
  }
};

// Delete Post
export const deletePost = async (id) => {
  try {
    const response = await axios.delete(`${base_URL}/${id}`);
    return response;
  } catch (error) {
    console.error(error);
  }
};
