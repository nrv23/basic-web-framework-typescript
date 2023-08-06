import { User } from "./models/User";
import { Collection } from './models/Collection';
import { IUserProps } from './interfaces/IUser';


/*const newUser = User.buildUser({ id: 13 });
newUser.set({ name: "new name", age: 10011 });
newUser.save();
/*
newUser.sync.save({
    id: newUser.attrs.get("id"),
    name: newUser.attrs.get("name"),
    age: newUser.attrs.get("age"),
});*/
/*
newUser.on('change', () => console.log(newUser));
newUser.on('save', () => console.log("save user"));
newUser.on('error', () => console.log("error "));
//newUser.trigger("change"); // con el trigger, se pasa el nombre del evento y se ejecuta el evento
//console.log(newUser.get('name'));

//newUser.set({ name: "nuevo nombre" });

newUser.fetch();*/
/*
const collection = new Collection<User, IUserProps>(
    "http://localhost:3000/users",
    (json: IUserProps) => User.buildUser(json)); // esta funcion lee un json y lo convierte y retorna a una instancia de tipo User */

const collection = User.buildUserCollection();
collection.fetch();
collection.on('change', () => console.log(collection));