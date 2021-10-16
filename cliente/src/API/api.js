import axios from "axios";

const apis = {
  development: "http://localhost:3000/",
};

const api = axios.create({
  baseURL: apis[process.env.NODE_ENV],
});

export default api;
