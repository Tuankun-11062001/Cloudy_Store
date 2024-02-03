import axios from "axios";
import { url } from "./url";
const CategoryAPI = {
  getCategories: async () => {
    const response = await axios.get(`${url}/category`);
    return response.data.data;
  },
};

export default CategoryAPI;
