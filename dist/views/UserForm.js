"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserForm = void 0;
const View_1 = require("./View");
class UserForm extends View_1.View {
    constructor() {
        super(...arguments);
        this.onSetAgeClick = () => {
            this.model.setRandomAge();
        };
        this.onChangeNameClick = () => {
            const { value: name } = document.querySelector("input");
            this.model.set({ name });
        };
    }
    eventsMap() {
        return {
            'click:.set-age': this.onSetAgeClick,
            'click:.set-name': this.onChangeNameClick
        };
    }
    template() {
        return `
            <div>
                <h1>
                    User Form
                </h1>
                <div>User name: ${this.model.get("name")}</div>
                <div>User age: ${this.model.get("age")}</div>
                <input/>
                <button class="set-name">Change Name</button>
                <button class="set-age">Set Random Age </button>
            </div>
        `;
    }
}
exports.UserForm = UserForm;
