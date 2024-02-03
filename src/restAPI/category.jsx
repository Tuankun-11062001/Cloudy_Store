import axios from "axios";
import { url } from "./url";
const CategoryAPI = {
  getCategories: async () => {
    const response = await axios.get(`https://twin-s.vercel.app/category`);
    return response.data.data;
  },
};

export default CategoryAPI;
