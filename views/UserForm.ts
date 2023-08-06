import { User } from "../models/User";
import { View } from './View';
import { IUserProps } from '../interfaces/IUser';

export class UserForm extends View<User, IUserProps> {

    eventsMap(): { [key: string]: () => void } { //[key: string] indica a typecript que el nombre de la llave no se sabe y va ser de tipo string
        return {
            'click:.set-age': this.onSetAgeClick,
            'click:.set-name': this.onChangeNameClick
        }
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