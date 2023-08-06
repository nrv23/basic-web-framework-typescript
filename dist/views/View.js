"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.View = void 0;
class View {
    constructor(parent, model) {
        this.parent = parent;
        this.model = model;
        this.bindModel();
    }
    bindModel() {
        this.model.on("change", () => this.render());
    }
    render() {
        this.parent.innerHTML = ''; // limpia el documento html 
        //y luego lo vuelve a llenar
        const templateElement = document.createElement("template");
        templateElement.innerHTML = this.template();
        // agregar los eventos al template html
        this.bindEvents(templateElement.content);
        // agregar el template al body html
        this.parent.append(templateElement.content);
    }
    bindEvents(fragment) {
        const eventsMap = this.eventsMap();
        for (const eventKey in eventsMap) {
            const [eventName, selector] = eventKey.split(":");
            fragment.querySelectorAll(selector).forEach(element => {
                element.addEventListener(eventName, eventsMap[eventKey]);
            });
        }
    }
}
exports.View = View;
