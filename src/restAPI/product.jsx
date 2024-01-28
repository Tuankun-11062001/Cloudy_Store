import axios from "axios";
import { url } from "./url";
const ProductAPI = {
  getProducts: async () => {
    const response = await axios.get(`${url}/product`);
    return response.data.data;
  },
};

export default ProductAPI;
