import axios from "axios";

axios.defaults.baseURL = "http://localhost:3002";

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default http;
