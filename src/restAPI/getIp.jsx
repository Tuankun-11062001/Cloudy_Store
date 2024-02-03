import axios from "axios";
import { url } from "./url";
const VistorAPI = {
  getVisitor: async () => {
    const dataVisitor = await axios.get("https://geolocation-db.com/json/");
    const { postal, longitude, latitude, ...rest } = dataVisitor.data;
    return rest;
  },
  postVisitor: async (data) => {
    const response = await axios.post(`${url}/visitor/add`, data);
    return response.data.data;
  },
};

export default VistorAPI;
