import { User } from "../models/User";
import { View } from './View';
import { IUserProps } from '../interfaces/IUser';

export class UserForm extends View<User, IUserProps> {

    eventsMap(): { [key: string]: () => void } { //[key: string] indica a typecript que el nombre de la llave no se sabe y va ser de tipo string

        /*
        [key: string]: () => void
        indica que la llave es de tipo string y el valor de la llave una funcion que no retorna nada
        */
        return {
            'click:.set-age': this.onSetAgeClick,
            'click:.set-name': this.onChangeNameClick,
            'click:.save-model': this.onSaveModelClick
        }
    }
    onSaveModelClick = (): void => {
        this.model.save()
    }

    onSetAgeClick = (): void => {
        this.model.setRandomAge();
    }

    onChangeNameClick = (): void => {
        const { value: name } = document.querySelector("input") as HTMLInputElement;
        this.model.set({ name });
    }

    template(): string {
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