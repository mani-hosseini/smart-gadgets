import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://smart-gadgets-backend.onrender.com/",
});

export default axiosInstance; 