import { Api } from "../utils/Api";

export const ConceptService = {
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
    return Api.get("/concepts?page=" + pgno + "&limit=" + limit + "&search=" + search)
  return Api.get("/concepts?page=" + pgno + "&limit=" + limit)
}

function create(concept) {
  return Api.post("/concepts", refineConcept(concept))
}

function getAllByUser(pgno, limit, search) {
  if (search)
    return Api.get("/concepts/user?page=" + pgno + "&limit=" + limit + "&search=" + search);
  return Api.get("/concepts/user?page=" + pgno + "&limit=" + limit);
}

function removeChild(cptid, pcptid) {
  return Api.get("/concepts/" + cptid + "/removePreConcept/" + pcptid);
}

function getById(id) {
  return Api.get("/concepts/" + id);
}

function update(obj) {
  return Api.put("/concepts/" + obj.id, refineConcept(obj));
}

function deleteById(id) {
  return Api.delete("/concepts/" + id);
}

function refineConcept(obj) {
  //refractor - concepts
}