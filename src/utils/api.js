import axios from "axios";

const baseURL =
  "http://ec2-13-215-194-103.ap-southeast-1.compute.amazonaws.com:5000/api";
// process.env.NODE_ENV === "production" ? "/api" : "http://localhost:5000/api";

export default axios.create({
  baseURL,
});
