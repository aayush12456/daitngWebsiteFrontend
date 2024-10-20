import axios from "axios";

const API = axios.create({
  // node js local server url
  // baseURL: "http://localhost:4000/user",

  // production server backend url
  baseURL: "https://apnapandaitingwebsitebackend.up.railway.app/user",
});


export default API;