"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const Attributes_1 = require("./Attributes");
const Eventing_1 = require("./Eventing");
const Sync_1 = require("./Sync");
class User {
    constructor(user) {
        this.user = user;
        this.events = new Eventing_1.Eventing();
        this.sync = new Sync_1.Sync("http://localhost:3000/users");
        this.attrs = new Attributes_1.Attributes(this.user);
    }
    get on() {
        // de manera que al llamar a la referencia de la funcion debe pasarle los argumentos
        return this.events.on; // hace referencia a la funcion de la clase Eventing
    }
    get trigger() {
        return this.events.trigger;
    }
    get get() {
        return this.attrs.get;
    }
}
exports.User = User;
