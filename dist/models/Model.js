"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model = void 0;
class Model {
    constructor(attrs, sync, events) {
        this.attrs = attrs;
        this.sync = sync;
        this.events = events;
        this.on = this.events.on;
        this.trigger = this.events.trigger;
        this.get = this.attrs.get;
    }
    set(user) {
        this.attrs.set(user);
        this.events.trigger("change");
    }
    fetch() {
        const id = this.get("id");
        if (typeof id !== 'number') { // si el id no existe
            throw new Error("Cannot fetch without an id");
        }
        this.sync.fetch(id).then((response => {
            this.set(response.data);
        }));
    }
    save() {
        this.sync.save(this.attrs.getAll())
            .then(response => {
            this.events.trigger("save");
        })
            .catch(_ => this.trigger("error"));
    }
}
exports.Model = Model;
