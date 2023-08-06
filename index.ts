import { User } from "./models/User";
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

const newUser = new User({ id: 1 });
newUser.attrs.set({ name: "new name", age: 500 });


newUser.sync.save({
    id: newUser.attrs.get("id"),
    name: newUser.attrs.get("name"),
    age: newUser.attrs.get("age"),
});

newUser.on('change', () => console.log('change'));
newUser.trigger("change"); // con el trigger, se pasa el nombre del evento y se ejecuta el evento
console.log(newUser.get('name'));