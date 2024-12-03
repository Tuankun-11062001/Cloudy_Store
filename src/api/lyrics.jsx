import axios from "axios";

const API = process.env.NEXT_PUBLIC_SERVER_URL;

export const lyricsApi = {
  searchLyrics: async (data) => {
    try {
      const res = await axios.get(`${API}/lyrics?title=${data}`);
      return res;
    } catch (error) {
      return error;
    }
  },
  viewLyrics: async (data) => {
    try {
      const res = await axios.put(`${API}/lyrics/${data._id}`, data);
      return res;
    } catch (error) {
      return error;
    }
  },
  addTranslate: async (data) => {
    try {
      const res = await axios.put(`${API}/lyrics/${data._id}`, data);
      return res;
    } catch (error) {
      return error;
    }
  },
  editTranslate: async (data) => {
    try {
      const res = await axios.put(
        `${API}/lyrics/translate/${data.idLyrics}`,
        data
      );
      return res;
    } catch (error) {
      return error;
    }
  },

  deleteTranslsate: async (data) => {
    try {
      const res = await axios.delete(
        `${API}/lyrics/${data.idLyrics}/translate/${data.idTranslate}`
      );
      return res;
    } catch (error) {
      return error;
    }
  },

  cloudyLyrics: async (data) => {
    try {
      const res = await axios.post(
        `${API}/lyrics/${data.idLyrics}/cloudy`,
        data
      );
      return res;
    } catch (error) {
      return error;
    }
  },

  addComment: async (data) => {
    try {
      const res = await axios.post(`${API}/lyrics/${data.id}/comment`, data);
      return res;
    } catch (error) {
      return error;
    }
  },

  deleteComment: async (data) => {
    try {
      const res = await axios.delete(
        `${API}/lyrics/${data.idLyrics}/comment/${data.idComment}`
      );
      return res;
    } catch (error) {
      return error;
    }
  },
};
