import { View } from './View';
import { User } from '../models/User';
import { IUserProps } from '../interfaces/IUser';
import { UserForm } from './UserForm';
import { UserShow } from './UserShow';


export class UserEdit extends View<User, IUserProps> {

    override regionsMap(): { [key: string]: string } {

        return {
            userShow: '.user-show',
            userForm: '.user-form',
        }
    }

    override onRender = (): void => {

        new UserShow(this.regions.userShow, this.model).render();
        new UserForm(this.regions.userForm, this.model).render();

    }

    template(): string {

        return `
            <div>
                <div class="user-form"></div>
                <div class="user-show"></div>

            </div>
        `;
    }

    eventsMap() {
        return {}
    }

}