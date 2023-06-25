import base from "./baseService";

const instance = base.service(true);

export const getAllReports = () => {
  return instance.get("/reports");
};

export const insertReport = (report) => {
  console.log(report);
  return instance.post("/reports/insert", report);
};

export const deleteReport = (id) => {
  return instance.delete(`/reports/delete/${id}`);
};

export default {
  getAllReports,
  insertReport,
};
