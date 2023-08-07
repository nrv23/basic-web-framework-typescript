import { CollectionView } from './Collection';
import { User } from '../models/User';
import { IUserProps } from '../interfaces/IUser';
import { UserShow } from './UserShow';


export class UserList extends CollectionView<User, IUserProps> {

    renderItem(model: User, itemParent: Element): void {
        new UserShow(itemParent, model).render();
    }

}