import axios from "axios";
const VistorAPI = {
  getVisitor: async () => {
    const dataVisitor = await axios.get("https://geolocation-db.com/json/");
    const { postal, longitude, latitude, ...rest } = dataVisitor.data;
    return rest;
  },
  postVisitor: async (data) => {
    const response = await axios.post(
      `${process.env.URL_SERVER}/visitor/add`,
      data
    );
    return response.data.data;
  },
};

export default VistorAPI;
