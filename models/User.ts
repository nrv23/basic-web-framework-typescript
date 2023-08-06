import { IUserProps } from '../interfaces/IUser';
import { Attributes } from './Attributes';
import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { Model } from './Model';
import { Collection } from './Collection';

const rootUrl = "http://localhost:3000/users";

export class User extends Model<IUserProps> {

    static buildUser(user: IUserProps): User {

        return new User( // esta clase hereda de Model entonces una vez que el constructor se ejecuta, los datos
            // de la nueva instancia de User van directo a Model por eso hay acceso a todos los metodos de Model
            new Attributes<IUserProps>(user),
            new Sync<IUserProps>(rootUrl),
            new Eventing()
        );
    }

    isAdminUser(): boolean {
        return this.get("id") === 1;
    }

    static buildUserCollection(): Collection<User, IUserProps> {
        return new Collection<User, IUserProps>(
            rootUrl,
            (json: IUserProps) => User.buildUser(json));
    }

}