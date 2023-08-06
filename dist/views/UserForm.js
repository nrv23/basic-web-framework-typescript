"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserForm = void 0;
class UserForm {
    constructor(parent) {
        this.parent = parent;
    }
    eventsMap() {
        return {
            'click:button': this.onButtonClick
        };
    }
    onButtonClick() {
        console.log("Hi there");
    }
    template() {
        return `
            <div>
            
                <h1>
                    User Form
                </h1>

                <input/>
            </div>
        `;
    }
    render() {
        const templateElement = document.createElement("template");
        templateElement.innerHTML = this.template();
        // agregar el template al body html
        this.parent.append(templateElement.content);
    }
}
exports.UserForm = UserForm;
