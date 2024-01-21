import axios, { AxiosInstance } from "axios";

const baseURL = "https://vu-alumni-api.onrender.com";

const axiosBase: AxiosInstance = axios.create({
  baseURL,
});

export default axiosBase;
