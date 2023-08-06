"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collection = void 0;
const Eventing_1 = require("./Eventing");
const axios_1 = __importDefault(require("axios"));
class Collection {
    constructor(rootUrl, deserilize) {
        this.rootUrl = rootUrl;
        this.deserilize = deserilize;
        this.models = [];
        this.events = new Eventing_1.Eventing();
    }
    get on() {
        return this.events.on;
    }
    get trigger() {
        return this.events.trigger;
    }
    fetch() {
        axios_1.default.get(this.rootUrl).then((response) => {
            response.data.forEach((value) => {
                /*

                    this.deserilize esta funcion devuelva una instnacia de una clase generica de forma que pueda ir almacenando en la coleccion
                    y la funcion deserilize entra como parametro
                */
                this.models.push(this.deserilize(value));
            });
            this.trigger("change");
        });
    }
}
exports.Collection = Collection;
