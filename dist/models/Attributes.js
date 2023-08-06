"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attributes = void 0;
class Attributes {
    constructor(data) {
        this.data = data;
    }
    get(key) {
        // un nombre de propiedad que no exuiste en a interfaz entonces da error,
        return this.data[key];
    }
    set(update) {
        Object.assign(this.data, update);
    }
}
exports.Attributes = Attributes;
