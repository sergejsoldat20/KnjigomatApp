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
export const getAllUsers = () => {
  return instance.get("/users");
};

export const makeAdmin = (id) => {
  return instance.post(`/users/make-admin/${id}`);
};

export const deleteUser = (id) => {
  return instance.delete(`/users/${id}`);
};

export default {
  insert,
  getCurrentUser,
  getUserById,
  getAllUsers,
  makeAdmin,
  deleteUser,
};
