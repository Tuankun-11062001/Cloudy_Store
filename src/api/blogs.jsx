import axios from "axios";

const API = process.env.NEXT_PUBLIC_SERVER_URL;

export const blogsApi = {
  searchBlogs: async (data) => {
    try {
      const res = await axios.get(`${API}/blogs?title=${data}`);
      return res;
    } catch (error) {
      return error;
    }
  },
  viewBlogs: async (data) => {
    try {
      const res = await axios.put(`${API}/blogs/${data._id}`, data);
      return res;
    } catch (error) {
      return error;
    }
  },

  cloudyBlogs: async (data) => {
    try {
      const res = await axios.post(`${API}/blogs/${data.id}/cloudy`, data);
      return res;
    } catch (error) {
      return error;
    }
  },

  addComment: async (data) => {
    try {
      const res = await axios.post(`${API}/blogs/${data.id}/comment`, data);
      return res;
    } catch (error) {
      return error;
    }
  },

  deleteComment: async (data) => {
    try {
      const res = await axios.delete(
        `${API}/blogs/${data.id}/comment/${data.idComment}`
      );
      return res;
    } catch (error) {
      return error;
    }
  },
};
