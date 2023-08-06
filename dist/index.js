"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./models/User");
/*
const user = new User({
    name: "test1", age: 1
});

user.set({ name: "test3", age: 2 });
user.on("click", () => {
    console.log("click ejcutado")
})

user.on("change", () => {
    console.log("change ejcutado")
})


// aqui ejecuta los eventos

user.trigger("click");

//capileacostarica

user.trigger("change");
*/
const newUser = new User_1.User({ id: 100 });
newUser.set({ name: "new name", age: 10011 });
newUser.save();
/*
newUser.sync.save({
    id: newUser.attrs.get("id"),
    name: newUser.attrs.get("name"),
    age: newUser.attrs.get("age"),
});*/
newUser.on('change', () => console.log(newUser));
newUser.on('save', () => console.log("save user"));
newUser.on('error', () => console.log("error "));
//newUser.trigger("change"); // con el trigger, se pasa el nombre del evento y se ejecuta el evento
//console.log(newUser.get('name'));
//newUser.set({ name: "nuevo nombre" });
newUser.fetch();
