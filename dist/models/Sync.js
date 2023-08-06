"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sync = void 0;
const axios_1 = __importDefault(require("axios"));
class Sync {
    constructor(rootUrl) {
        this.rootUrl = rootUrl;
    }
    fetch(id) {
        return axios_1.default.get(`${this.rootUrl}/${id}`);
    }
    save(data) {
        const { id } = data;
        if (id) { // put request
            return axios_1.default.put(`${this.rootUrl}/${id}`, data);
        }
        else { // post request
            return axios_1.default.post(this.rootUrl, data);
        }
    }
}
exports.Sync = Sync;
