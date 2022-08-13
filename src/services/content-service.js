import { Api } from "../utils/Api";

export const ContentService = {
  getAll,
  postContent,
  getContentChart,
  getUserContent,
  addContentLike,
  addUserToLibrary,
  removeUserFromLibrary,
  getById,
  update,
  deleteById
}

function getAll(pgno, limit) {
  return Api.get("/contents?page=" + pgno + "&limit=" + limit);
}

function postContent(content) {
  return Api.post("/contents", content);
}

function getContentChart() {
  return Api.get("/contents/chart");
}

function getUserContent(pgno, limit) {
  return Api.get("/contents/user?page=" + pgno + "&limit=" + limit);
}

function addContentLike(id) {
  return Api.get("/contents/addLike/" + id);
}

function addUserToLibrary(id) {
  return Api.get("/contents/addUserToLibrary/" + id);
}

function removeUserFromLibrary(id) {
  return Api.get("/contents/removeUserFromLibrary/" + id);
}

function getById(id) {
  return Api.get("/contents/" + id);
}

function update(obj) {
  return Api.put("/contents/" + obj.id, obj);
}

function deleteById(id) {
  return Api.delete("/contents/" + id);
}

