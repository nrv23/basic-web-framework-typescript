"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserList = void 0;
const Collection_1 = require("./Collection");
const UserShow_1 = require("./UserShow");
class UserList extends Collection_1.CollectionView {
    renderItem(model, itemParent) {
        new UserShow_1.UserShow(itemParent, model).render();
    }
}
exports.UserList = UserList;
