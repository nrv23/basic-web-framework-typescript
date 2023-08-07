"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEdit = void 0;
const View_1 = require("./View");
const UserForm_1 = require("./UserForm");
const UserShow_1 = require("./UserShow");
class UserEdit extends View_1.View {
    constructor() {
        super(...arguments);
        this.onRender = () => {
            new UserShow_1.UserShow(this.regions.userShow, this.model).render();
            new UserForm_1.UserForm(this.regions.userForm, this.model).render();
        };
    }
    regionsMap() {
        return {
            userShow: '.user-show',
            userForm: '.user-form',
        };
    }
    template() {
        return `
            <div>
                <div class="user-form"></div>
                <div class="user-show"></div>

            </div>
        `;
    }
    eventsMap() {
        return {};
    }
}
exports.UserEdit = UserEdit;
