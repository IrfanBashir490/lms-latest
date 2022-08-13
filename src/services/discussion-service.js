import { Api } from "../utils/Api";

export const DiscussionService = {
    create,
    getAll,
    getAllByUser,
    getById,
    update,
    deleteById,

    addInteraction,
    getAllInteraction,
    getInteractionById,
    updateInteraction,
    deleteInteractionById
}

function getAll(pgno, limit, type, search, studycircleId, courseId, subjectId, topciId) {
    var dynamicPath = "/interactions?page=" + pgno + "&limit=" + limit
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

function create(discussion) {
    return Api.post("/interactions", discussion)
}

function getAllByUser(pgno, limit, type, search, studycircleId, courseId, subjectId, topciId) {
    var dynamicPath = "/interactions/user?page=" + pgno + "&limit=" + limit
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
    return Api.get("/interactions/" + id)
}

function update(obj) {
    return Api.put("/interactions/" + obj.id, refineInteraction(obj))
}

function deleteById(id) {
    return Api.delete("/interactions/" + id)
}

/***********INTERACTIONS***************** */
function addInteraction(discussionId, obj) {
    return Api.post("/interactions/" + discussionId + "/talks", refineInteraction(obj))
}

function getAllInteraction(discussionId, pgno, limit, type, search) {
    var dynamicPath = "/interactions" + discussionId + "/talks?page=" + pgno + "&limit=" + limit
    if (type)
        dynamicPath = dynamicPath.concat("&type=" + type)
    if (search)
        dynamicPath = dynamicPath.concat("&search=" + search)
    return Api.get(dynamicPath)
}

function getInteractionById(id) {
    return Api.get("/interactions/talks" + id)
}

function updateInteraction(obj) {
    return Api.put("/interactions/talks" + obj.id, refineInteraction(obj))
}

function deleteInteractionById(id) {
    return Api.delete("/interactions/talks" + id)
}

function refineDiscussion(obj) {
    //refractor - Discussions
}

function refineInteraction(obj) {

}