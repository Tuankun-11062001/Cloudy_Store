import axios from "axios";
const ProductAPI = {
  getProducts: async () => {
    const response = await axios.get(`${process.env.URL_SERVER}/product`);
    return response.data.data;
  },
  getProductById: async (id) => {
    const response = await axios.get(
      `${process.env.URL_SERVER}/product/find/${id}`
    );
    return response.data.data;
  },
};

export default ProductAPI;
