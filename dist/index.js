"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserEdit_1 = require("./views/UserEdit");
const User_1 = require("./models/User");
const root = document.getElementById("root");
if (root) {
    const user = User_1.User.buildUser({ name: "NAME", age: 20 });
    const userEdit = new UserEdit_1.UserEdit(root, user);
    userEdit.render();
    console.log(userEdit);
}
else {
    throw new Error("root element not found");
}
