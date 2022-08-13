import { Api } from "../utils/Api";

export const PreConceptService = {
  create,
  getAll,
  getAllByUser,
  getById,
  update,
  deleteById
}

function getAll(pgno, limit, search) {
  if (search)
    return Api.get("/preconcepts?page=" + pgno + "&limit=" + limit + "&search=" + search)
  return Api.get("/preconcepts?page=" + pgno + "&limit=" + limit)
}

function create(preconcept) {
  return Api.post("/preconcepts", refinePreConcept(preconcept))
}

function getAllByUser(pgno, limit, search) {
  if (search)
    return Api.get("/preconcepts/user?page=" + pgno + "&limit=" + limit + "&search=" + search);
  return Api.get("/preconcepts/user?page=" + pgno + "&limit=" + limit);
}

function getById(id) {
  return Api.get("/preconcepts/" + id);
}

function update(obj) {
  return Api.put("/preconcepts/" + obj.id, refinePreConcept(obj));
}

function deleteById(id) {
  return Api.delete("/preconcepts/" + id);
}

function refinePreConcept(obj) {
  //refractor - preconcepts
}