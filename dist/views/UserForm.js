"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserForm = void 0;
const View_1 = require("./View");
class UserForm extends View_1.View {
    constructor() {
        super(...arguments);
        this.onSaveModelClick = () => {
            this.model.save();
        };
        this.onSetAgeClick = () => {
            this.model.setRandomAge();
        };
        this.onChangeNameClick = () => {
            const { value: name } = document.querySelector("input");
            this.model.set({ name });
        };
    }
    eventsMap() {
        /*
        [key: string]: () => void
        indica que la llave es de tipo string y el valor de la llave una funcion que no retorna nada
        */
        return {
            'click:.set-age': this.onSetAgeClick,
            'click:.set-name': this.onChangeNameClick,
            'click:.save-model': this.onSaveModelClick
        };
    }
    template() {
        return `
            <div>
                <input placeholder=${this.model.get("name")} />
                <button class="set-name">Change Name</button>
                <button class="set-age">Set Random Age </button>
                <button class="save-model">save</button>
            </div>
        `;
    }
}
exports.UserForm = UserForm;
