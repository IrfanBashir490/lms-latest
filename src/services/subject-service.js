import { Api } from "../utils/Api";

export const SubjectService = {
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
    return Api.get("/subjects?page=" + pgno + "&limit=" + limit + "&search=" + search)
  return Api.get("/subjects?page=" + pgno + "&limit=" + limit)
}

function create(subject) {
  return Api.post("/subjects", refineSubject(subject))
}

function getAllByUser(pgno, limit, search) {
  if (search)
    return Api.get("/subjects/user?page=" + pgno + "&limit=" + limit + "&search=" + search);
  return Api.get("/subjects/user?page=" + pgno + "&limit=" + limit);
}

function removeChild(subid, tid) {
  return Api.get("/subjects/" + subid + "/removeTopic/" + tid);
}

function getById(id) {
  return Api.get("/subjects/" + id);
}

function update(obj) {
  return Api.put("/subjects/" + obj.id, refineSubject(obj));
}

function deleteById(id) {
  return Api.delete("/subjects/" + id);
}

function refineSubject(obj) {
  //refractor - subjects
}