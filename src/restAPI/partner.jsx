import axios from "axios";
import { url } from "./url";
const PartnerAPI = {
  getPartners: async () => {
    const response = await axios.get(`${url}/partner`);
    return response.data.data;
  },
};

export default PartnerAPI;
