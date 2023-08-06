"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(data) {
        this.data = data;
        this.events = {};
    }
    get(propName) {
        return propName === "name" ? this.data["name"] : this.data["age"];
    }
    set(update) {
        Object.assign(this.data, {
            name: update.name,
            age: update.age,
        });
    }
    on(eventName, callback) {
        const handlers = this.events[eventName] || [];
        handlers.push(callback);
        this.events[eventName] = handlers;
    }
}
exports.User = User;
