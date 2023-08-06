import { Eventing } from './Eventing';
import axios, { AxiosResponse } from 'axios';


export class Collection<T, K> { //

    models: T[] = [];
    events: Eventing = new Eventing();

    constructor(
        public rootUrl: string,
        public deserilize: (json: K) => T) { }

    get on() {
        return this.events.on;
    }

    get trigger() {
        return this.events.trigger;
    }

    fetch(): void {

        axios.get(this.rootUrl).then((response: AxiosResponse) => {
            response.data.forEach((value: K) => {
                /*

                    this.deserilize esta funcion devuelva una instnacia de una clase generica de forma que pueda ir almacenando en la coleccion
                    y la funcion deserilize entra como parametro
                */
                this.models.push(this.deserilize(value));
            });

            this.trigger("change");
        })
    }
}