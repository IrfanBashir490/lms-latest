import { Api } from "../utils/Api";

export const AssignmentService = {
    create,
    getAll,
    getAllByUser,
    getById,
    update,
    deleteById,

    addWorkChat,
    getAllWorkChat,
    getWorkChatById,
    updateWorkChat,
    deleteWorkChatById
}

function getAll(pgno, limit, type, search, studycircleId, courseId, subjectId, topciId) {
    var dynamicPath = "/assignments?page=" + pgno + "&limit=" + limit
    if (type)
        dynamicPath = dynamicPath.concat("&type=" + type)
    if (search)
        dynamicPath = dynamicPath.concat("&search=" + search)
    if (studycircleId)
        dynamicPath = dynamicPath.concat("&studycircleId=" + studycircleId)
    if (courseId)
        dynamicPath = dynamicPath.concat("&courseId=" + courseId)
    if (subjectId)
        dynamicPath = dynamicPath.concat("&subjectId=" + subjectId)
    if (topciId)
        dynamicPath = dynamicPath.concat("&topciId=" + topciId)
    return Api.get(dynamicPath)
}

function create(assignment) {
    return Api.post("/assignments", assignment)
}

function getAllByUser(pgno, limit, type, search, studycircleId, courseId, subjectId, topciId) {
    var dynamicPath = "/assignments/user?page=" + pgno + "&limit=" + limit
    if (type)
        dynamicPath = dynamicPath.concat("&type=" + type)
    if (search)
        dynamicPath = dynamicPath.concat("&search=" + search)
    if (studycircleId)
        dynamicPath = dynamicPath.concat("&studycircleId=" + studycircleId)
    if (courseId)
        dynamicPath = dynamicPath.concat("&courseId=" + courseId)
    if (subjectId)
        dynamicPath = dynamicPath.concat("&subjectId=" + subjectId)
    if (topciId)
        dynamicPath = dynamicPath.concat("&topciId=" + topciId)
    return Api.get(dynamicPath)
}

function getById(id) {
    return Api.get("/assignments/" + id)
}

function update(obj) {
    return Api.put("/assignments/" + obj.id, refineWorkChat(obj))
}

function deleteById(id) {
    return Api.delete("/assignments/" + id)
}

/***********assignments***************** */
function addWorkChat(assignmentId, obj) {
    return Api.post("/assignments/" + assignmentId + "/talks", refineWorkChat(obj))
}

function getAllWorkChat(assignmentId, pgno, limit, type, search) {
    var dynamicPath = "/assignments" + assignmentId + "/talks?page=" + pgno + "&limit=" + limit
    if (type)
        dynamicPath = dynamicPath.concat("&type=" + type)
    if (search)
        dynamicPath = dynamicPath.concat("&search=" + search)
    return Api.get(dynamicPath)
}

function getWorkChatById(id) {
    return Api.get("/assignments/talks" + id)
}

function updateWorkChat(obj) {
    return Api.put("/assignments/talks" + obj.id, refineWorkChat(obj))
}

function deleteWorkChatById(id) {
    return Api.delete("/assignments/talks" + id)
}

function refineassignment(obj) {
    //refractor - assignments
}

function refineWorkChat(obj) {

}