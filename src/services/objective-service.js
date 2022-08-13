import { Api } from "../utils/Api";

export const ObjectiveService = {
  create,
  getAll,
  getAllByUser,
  getById,
  update,
  deleteById
}

function getAll(pgno, limit, search) {
  if (search)
    return Api.get("/objectives?page=" + pgno + "&limit=" + limit + "&search=" + search)
  return Api.get("/objectives?page=" + pgno + "&limit=" + limit)
}

function create(objective) {
  return Api.post("/objectives", refineObjective(objective))
}

function getAllByUser(pgno, limit, search) {
  if (search)
    return Api.get("/objectives/user?page=" + pgno + "&limit=" + limit + "&search=" + search);
  return Api.get("/objectives/user?page=" + pgno + "&limit=" + limit);
}

function getById(id) {
  return Api.get("/objectives/" + id);
}

function update(obj) {
  return Api.put("/objectives/" + obj.id, refineObjective(obj));
}

function deleteById(id) {
  return Api.delete("/objectives/" + id);
}

function refineObjective(obj) {
  //refractor - objectives
}