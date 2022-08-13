import { Api } from "../utils/Api";

export const StudyCircleService = {
  getAll,
  postStudyCircle,
  getUserStudyCircle,
  addCourseToStudyCircle,
  removeCourseFromStudyCircle,
  addStudentToStudyCircle,
  removeStudentFromStudyCircle,
  getById,
  update,
  deleteById
}

function getAll(pgno, limit) {
  return Api.get("/studycircles?page=" + pgno + "&limit=" + limit);
}

function postStudyCircle(studycircle) {
  return Api.post("/studycircles", refineStudyCircle(studycircle));
}

function getUserStudyCircle(pgno, limit) {
  if (pgno && limit)
    return Api.get("/studycircles/user?page=" + pgno + "&limit=" + limit);
  return Api.get("/studycircles/user");
}

function addCourseToStudyCircle(id, cid) {
  return Api.get("/studycircles/" + id + "/addCourse/" + cid);
}

function removeCourseFromStudyCircle(id, cid) {
  return Api.get("/studycircles/" + id + "/removeCourse/" + cid);
}

function addStudentToStudyCircle(id, stid) {
  return Api.get("/studycircles/" + id + "/addStudent/" + stid);
}

function removeStudentFromStudyCircle(id, stid) {
  return Api.get("/studycircles/" + id + "/removeStudent/" + stid);
}

function getById(id) {
  return Api.get("/studycircles/" + id);
}

function update(obj) {
  return Api.put("/studycircles/" + obj.id, refineStudyCircle(obj));
}

function deleteById(id) {
  return Api.delete("/studycircles/" + id);
}

function refineStudyCircle(obj) {
  //refractor - scHeads, faculties, courses, students
  if (obj.scHeads && obj.scHeads.length > 0) {
    obj.scHeads = obj.scHeads.map(o => o.id)
  }
  if (obj.faculties && obj.faculties.length > 0) {
    obj.faculties = obj.faculties.map(o => o.id)
  }
  if (obj.courses && obj.courses.length > 0) {
    obj.courses = obj.courses.map(o => o.id)
  }
  if (obj.students && obj.students.length > 0) {
    obj.students = obj.students.map(o => o.id)
  }
  obj.dName = obj.name;
  return obj;
}
