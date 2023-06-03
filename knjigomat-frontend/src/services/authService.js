import base from "./baseService";

const instance = base.service(true);
const instanceGuest = base.service(false);
const stringUser = "1y56t9z7-8s513sa6-7s03kl2-99p4";
const stringAdmin = "12-4a5ba8q-kkl9135d-dfhdc119-f33184";
export const register = (request) => {
  return instanceGuest.post("/api/auth/register", request);
};
export const confirmEmail = (request) => {
  return instanceGuest.post("/api/auth/confirm-pin", request);
};
export const changePassword = (request) => {
  return instance.post("/api/auth/cahnge-password", request);
};
export const getEmailConfirmed = (username) => {
  return instanceGuest.get(`/api/auth/email-confirmed/${username}`);
};
export const sendPin = (username) => {
  return instanceGuest.get(`/api/auth/send-pin/${username}`);
};
export const setRole = (role) => {
  if (role === "USER") return stringUser;
  if (role === "ADMIN") return stringAdmin;
};

export const CheckIfAdmin = () => {
  const role = localStorage.getItem("role");
  if (role === stringAdmin) {
    return true;
  } else {
    return false;
  }
};

const CheckIfUser = () => {
  const role = localStorage.getItem("role");
  if (role === stringUser) {
    return true;
  } else {
    return false;
  }
};

const CheckIfAuthorized = () => {
  return CheckIfAdmin() || CheckIfUser();
};

export default {
  register,
  changePassword,
  setRole,
  CheckIfAdmin,
  CheckIfUser,
  CheckIfAuthorized,
  getEmailConfirmed,
  confirmEmail,
  sendPin,
};
