import { AxiosPromise } from 'axios';
import { Callback } from "../Types/Callback";

interface IModelAttrs<T> {
    get<K extends keyof T>(key: K): T[K];
    set(update: T): void;
    getAll(): T;
}

interface ISync<T> {
    fetch(id: number): AxiosPromise<T>;
    save(data: T): AxiosPromise;
}

interface IEvents {
    on(eventName: string, callback: Callback): void;
    trigger(eventName: string): void;
}

// reestriccion para una intrfaz generica

interface HasId {
    id?: number;
}


export class Model<T extends HasId> { //Model<T extends HasId> indica que la interfaz T hereda la propiedad id de la interfaz HasId

    constructor(
        private attrs: IModelAttrs<T>,
        private sync: ISync<T>,
        private events: IEvents
    ) {

    }

    on = this.events.on;
    trigger = this.events.trigger;
    get = this.attrs.get;

    set(user: T): void {

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