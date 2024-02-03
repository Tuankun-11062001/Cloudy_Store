import axios from "axios";
import { url } from "./url";
const PartnerAPI = {
  getPartners: async () => {
    const response = await axios.get(`https://twin-s.vercel.app/partner`);
    return response.data.data;
  },
};

export default PartnerAPI;
