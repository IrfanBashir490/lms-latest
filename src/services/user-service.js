import { Api, authHead } from "../utils/Api";

export const UserService = {
  login,
  logout,
  currentUser,
  refreshToken,
  register,
  getAll,
  getUsersByRole,
  getById,
  update,
  online,
  idle,
  delete: _delete
};

function login(username, password) {
  return Api.post("/users/auth", {
    username: username,
    password: password,
  })
    .then((user) => {
      const token = user.token;
      localStorage.setItem("jwt", token);
      authHead(token);
      return user;
    });
}

function logout() {
  return Api.get("/users/current/offline");
}

function getAll(pgno, limit) {
  return Api.get("/users?page=" + pgno + "&limit=" + limit);
}

function getUsersByRole(role) {
  return Api.get("/users?role=" + role);
}

function currentUser() {
  return Api.get("/users/current");
}

function refreshToken() {
  return Api.get("/users/auth/refresh")
    .then(obj => {
      if (obj) {
        localStorage.setItem("jwt", obj.token);
      }
    });
}

function online() {
  return Api.get("/users/current/online");
}

function idle() {
  return Api.get("/users/current/idle");
}

function getById(id) {
  return Api.get("/users/" + id);
}

function register(user) {
  return Api.post("/users", user);
}

function update(user) {
  return Api.put("/users/" + user.id, user);
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
  return Api.delete("/users/" + id);
}
