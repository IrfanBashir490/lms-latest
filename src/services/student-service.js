import { Api } from "../utils/Api";

export const StudentService = {
  getCurrentStudent,
  getAll,
  getById,
  update,
  postStudent,
};

function getCurrentStudent() {
  return Api.get("/students/user/current");
}

function getAll() {
  return Api.get("/students");
}

function postStudent(uid, student) {
  return Api.get("/students/" + uid, student);
}

function getById(id) {
  return Api.get("/students/" + id);
}

function update(student) {
  return Api.put("/students", student);
}
