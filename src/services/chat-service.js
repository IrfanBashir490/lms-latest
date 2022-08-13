import { Api } from "../utils/Api";

export const ChatService = {

    createRoom,
    getAllRooms,
    getByRoomId,
    getRoomByFromToUser,
    getRoomsByUser,
    updateRoom,
    deleteRoom,

    createChat,
    getAllChatForRoom,
    getByChatId,
    updateChat,
    deleteChat,
};

/*************ROOMS******************* */

function createRoom(room) {
    return Api.post("/chats/rooms", room);
}

function getAllRooms(pgno, limit) {
    return Api.get("/chats/rooms?page=" + pgno + "&limit=" + limit);
}

function getRoomsByUser() {
    return Api.get("/chats/rooms/user");
}

function getRoomByFromToUser(fromuid, touid) {
    return Api.get("/chats/rooms/fromUser/" + fromuid + "/toUser/" + touid);
}

function getByRoomId(id) {
    return Api.get("/chats/rooms/" + id);
}

function updateRoom(obj) {
    return Api.put("/chats/rooms/" + obj.id, obj);
}

function deleteRoom(obj) {
    return Api.delete("/chats/rooms/" + obj.id);
}


/*************CHATS******************* */

function getAllChatForRoom(roomid, pgno, limit) {
    return Api.get("/chats/" + roomid + "?page=" + pgno + "&limit=" + limit);
}

function createChat(roomid, chat) {
    return Api.post("/chats/" + roomid, chat);
}

function getByChatId(id) {
    return Api.get("/chats/message/" + id);
}

function updateChat(obj) {
    return Api.put("/chats/message/" + obj.id, obj);
}

function deleteChat(obj) {
    return Api.delete("/chats/message/" + obj.id);
}
