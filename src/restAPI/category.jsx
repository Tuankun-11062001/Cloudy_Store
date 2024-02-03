import axios from "axios";
const CategoryAPI = {
  getCategories: async () => {
    const response = await axios.get(`${NEXT_PUBLIC_URL_SERVER}/category`);
    return response.data.data;
  },
};

export default CategoryAPI;
