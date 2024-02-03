import axios from "axios";
const PartnerAPI = {
  getPartners: async () => {
    const response = await axios.get(`${process.env.URL_SERVER}/partner`);
    return response.data.data;
  },
};

export default PartnerAPI;
