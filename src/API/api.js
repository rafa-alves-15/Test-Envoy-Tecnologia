import axios from "axios";

const apis = {
  development: "http://localhost:3000/Movies",
};

// Pré-configurando a URL padrão do nosso backend em uma instância do Axios
const api = axios.create({
  baseURL: apis[process.env.NODE_ENV],
});

export default api;
