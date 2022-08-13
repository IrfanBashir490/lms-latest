import { Api } from "../utils/Api";

export const TeacherService = {
  getCurrentTeacher,
  getAll,
  getById,
  update,
  postTeacher,
};

function getCurrentTeacher() {
  return Api.get("/teachers/user/current");
}

function getAll() {
  return Api.get("/teachers");
}

function postTeacher(uid, teacher) {
  return Api.get("/teachers/" + uid, teacher);
}

function getById(id) {
    return Api.get("/teachers/" + id);
  }

function update(teacher) {
  return Api.put("/teachers", teacher);
}
