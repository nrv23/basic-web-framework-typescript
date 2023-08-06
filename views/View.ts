
import { Model } from '../models/Model';
import { HasId } from '../interfaces/IHasId';


export abstract class View<T extends Model<K>, K extends HasId> {

    constructor(public parent: Element, public model: T) {
        this.bindModel();
    }

    abstract eventsMap(): { [key: string]: () => void }; // Las funciones abstractas se deben implementar en la case que hereda esta clase
    abstract template(): string;  // Las funciones abstractas se deben implementar en la case que hereda esta clase

    bindModel() { // esta funcion escucha cmbios en el document html y vuelve a renderizar la aplicacion
        this.model.on("change", () => this.render());
    }


    render(): void {

        this.parent.innerHTML = ''; // limpia el documento html 
        //y luego lo vuelve a llenar
        const templateElement = document.createElement("template");
        templateElement.innerHTML = this.template();
        // agregar los eventos al template html
        this.bindEvents(templateElement.content);
        // agregar el template al body html
        this.parent.append(templateElement.content);

    }

    bindEvents(fragment: DocumentFragment): void {
        const eventsMap = this.eventsMap();

        for (const eventKey in eventsMap) {

            const [eventName, selector] = eventKey.split(":");

            fragment.querySelectorAll(selector).forEach(element => {
                element.addEventListener(eventName, eventsMap[eventKey]);
            })
        }
    }
}