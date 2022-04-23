import axios from "axios";

const baseURL = "https://dunia-keramik.herokuapp.com/api";
// process.env.NODE_ENV === "production" ? "/api" : "http://localhost:5000/api";

export default axios.create({
  baseURL,
});
