export class UserForm {


    constructor(public parent: Element) {

    }

    eventsMap(): { [key: string]: () => void } { //[key: string] indica a typecript que el nombre de la llave no se sabe y va ser de tipo string
        return {
            'click:button': this.onButtonClick
        }
    }

    onButtonClick() {
        console.log("Hi there");
    }

    template(): string {
        return `
            <div>
            
                <h1>
                    User Form
                </h1>

                <input/>
            </div>
        `;
    }

    render(): void {
        const templateElement = document.createElement("template");
        templateElement.innerHTML = this.template();
        // agregar el template al body html
        this.parent.append(templateElement.content);

    }
}