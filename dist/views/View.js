"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.View = void 0;
class View {
    constructor(parent, model) {
        this.parent = parent;
        this.model = model;
        this.regions = {};
        this.bindModel();
    }
    regionsMap() {
        return {};
    }
    eventsMap() { return {}; }
    ; // esta funcion es opcional de implementar en la clase que ña hereda
    bindModel() {
        this.model.on("change", () => this.render());
    }
    mapRegions(fragment) {
        const regionsMap = this.regionsMap();
        for (const key in regionsMap) {
            const selector = regionsMap[key];
            const element = fragment.querySelector(selector);
            if (element) {
                this.regions[key] = element;
            }
        }
    }
    onRender() {
    }
    render() {
        this.parent.innerHTML = ''; // limpia el documento html 
        //y luego lo vuelve a llenar
        const templateElement = document.createElement("template");
        templateElement.innerHTML = this.template();
        // agregar los eventos al template html
        this.bindEvents(templateElement.content);
        //
        //
        this.mapRegions(templateElement.content);
        this.onRender();
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
