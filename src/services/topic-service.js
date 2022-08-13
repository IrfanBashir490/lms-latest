import { Api } from "../utils/Api";

export const TopicService = {
  create,
  getAll,
  getAllByUser,
  removeChild,
  getById,
  update,
  deleteById
}

function getAll(pgno, limit, search) {
  if (search)
    return Api.get("/topics?page=" + pgno + "&limit=" + limit + "&search=" + search)
  return Api.get("/topics?page=" + pgno + "&limit=" + limit)
}

function create(topic) {
  return Api.post("/topics", refineTopic(topic))
}

function getAllByUser(pgno, limit, search) {
  if (search)
    return Api.get("/topics/user?page=" + pgno + "&limit=" + limit + "&search=" + search);
  return Api.get("/topics/user?page=" + pgno + "&limit=" + limit);
}

function removeChild(tid, cptid) {
  return Api.get("/topics/" + tid + "/removeConcept/" + cptid);
}

function getById(id) {
  return Api.get("/topics/" + id);
}

function update(obj) {
  return Api.put("/topics/" + obj.id, refineTopic(obj));
}

function deleteById(id) {
  return Api.delete("/topics/" + id);
}

function refineTopic(obj) {
  //refractor - topics
}