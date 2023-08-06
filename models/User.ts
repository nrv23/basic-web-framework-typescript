import { IUserProps } from '../interfaces/IUser';
import { Callback } from '../Types/Callback';
import { Attributes } from './Attributes';
import { Eventing } from './Eventing';
import { Sync } from './Sync';


export class User {

    public events: Eventing = new Eventing();
    public sync: Sync<IUserProps> = new Sync<IUserProps>("http://localhost:3000/users");
    public attrs: Attributes<IUserProps>;

    constructor(private user: IUserProps) {
        this.attrs = new Attributes<IUserProps>(this.user);
    }

    get on() { // al usar el get, usa el on de esta clase para llamar a una referencia de la funcion on de la clase events,
        // de manera que al llamar a la referencia de la funcion debe pasarle los argumentos
        return this.events.on; // hace referencia a la funcion de la clase Eventing
    }

    get trigger() {
        return this.events.trigger;
    }

    get get() {
        return this.attrs.get;
    }

    set(user: IUserProps): void {

        this.attrs.set(user);
        this.events.trigger("change");
    }

    fetch(): void {

        const id = this.get("id");

        if (typeof id !== 'number') { // si el id no existe
            throw new Error("Cannot fetch without an id");
        }


        this.sync.fetch(id).then((response => {
            this.set(response.data);
        }))
    }

    save(): void {
        this.sync.save(this.attrs.getAll())
            .then(response => {
                this.events.trigger("save");
            })
            .catch(_ => this.trigger("error"));
    }
}