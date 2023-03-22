import base from "./baseService";

const instance = base.service(false);

export const insert = (user) => {
  return instance.post(`/users`, user);
};

export const getCurrentUser = () => {
  return instance.get("/users/current-user");
};

export default {
  insert,
  getCurrentUser,
};
