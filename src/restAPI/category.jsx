import axios from "axios";
const CategoryAPI = {
  getCategories: async () => {
    const response = await axios.get(`${process.env.URL_SERVER}/category`);
    return response.data.data;
  },
};

export default CategoryAPI;
