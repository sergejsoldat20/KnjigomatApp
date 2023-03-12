import base from "./base.service";
import axios from "axios";
const instance = base.service(true);

export const changePassword = (request) => {
  return instance.post("/api/auth/cahnge-password", request);
};

export const login = async (request) => {
  return await axios.post("http://localhost:9000/api/auth/login", request);
};

export const register = async (request) => {
  return await axios.post("http://localhost:9000/api/auth/register", request);
};

export default {
  changePassword,
  register,
  login,
};
