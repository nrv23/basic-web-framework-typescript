import { View } from './View';
import { User } from '../models/User';
import { IUserProps } from '../interfaces/IUser';

export class UserShow extends View<User, IUserProps> {


    template(): string {
        return `
            <div>
                <h1>User Detail</h1>
                <div>Username: ${this.model.get("name")}</div>
                <div>User age: ${this.model.get("age")}</div>
            </div>
        `;
    }


}