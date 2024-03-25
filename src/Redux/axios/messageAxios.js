import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:4000/message",
});


export default API;