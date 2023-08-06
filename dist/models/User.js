"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const Attributes_1 = require("./Attributes");
const Eventing_1 = require("./Eventing");
const Sync_1 = require("./Sync");
const Model_1 = require("./Model");
const Collection_1 = require("./Collection");
const rootUrl = "http://localhost:3000/users";
class User extends Model_1.Model {
    static buildUser(user) {
        return new User(// esta clase hereda de Model entonces una vez que el constructor se ejecuta, los datos
        // de la nueva instancia de User van directo a Model por eso hay acceso a todos los metodos de Model
        new Attributes_1.Attributes(user), new Sync_1.Sync(rootUrl), new Eventing_1.Eventing());
    }
    isAdminUser() {
        return this.get("id") === 1;
    }
    static buildUserCollection() {
        return new Collection_1.Collection(rootUrl, (json) => User.buildUser(json));
    }
    setRandomAge() {
        const age = Math.round(Math.random() * 100);
        this.set({ age });
    }
}
exports.User = User;
