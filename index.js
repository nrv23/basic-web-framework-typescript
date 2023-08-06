"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./models/User");
const user = new User_1.User({
    name: "test1", age: 1
});
user.set({ name: "test3", age: 2 });
console.log(user.get("age"));
console.log(user.get("name"));
