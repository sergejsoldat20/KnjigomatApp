import base from "./baseService";

const instance = base.service(true);

export const insert = (user) => {
  return instance.post(`/users`, user);
};

export const getCurrentUser = () => {
  return instance.get("/users/current-user");
};

export const getUserById = (id) => {
  return instance.get(`/users/${id}`);
};
export default {
  insert,
  getCurrentUser,
  getUserById,
};
