import { Api } from "../utils/Api";

export const CourseService = {
  getAll,
  create,
  getAllByUser,
  removeChild,
  getById,
  update,
  deleteById
}

function getAll(pgno, limit, search) {
  if (search)
    return Api.get("/courses?page=" + pgno + "&limit=" + limit + "&search=" + search)
  return Api.get("/courses?page=" + pgno + "&limit=" + limit)
}

function create(course) {
  return Api.post("/courses", refineCourse(course))
}

function getAllByUser(pgno, limit, search) {
  if (search)
    return Api.get("/courses/user?page=" + pgno + "&limit=" + limit + "&search=" + search)
  return Api.get("/courses/user?page=" + pgno + "&limit=" + limit)
}

function removeChild(crsid, subid) {
  return Api.get("/courses/" + crsid + "/removeUserFromLibrary/" + subid);
}

function getById(id) {
  return Api.get("/courses/" + id);
}

function update(obj) {
  return Api.put("/courses/" + obj.id, refineCourse(obj));
}

function deleteById(id) {
  return Api.delete("/courses/" + id);
}

function refineCourse(obj) {
  //refractor - subjects
}