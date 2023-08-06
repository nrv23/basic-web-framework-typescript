
import { Callback } from '../Types/Callback';

export class Eventing {

    events: { [key: string]: Callback[] } = {};

    on = (eventName: string, callback: Callback): void => {

        const handlers = this.events[eventName] || [];
        handlers.push(callback);
        this.events[eventName] = handlers;
    }

    trigger = (eventName: string): void => {
        const handlers = this.events[eventName];

        if (!handlers || !handlers.length) return;

        // ejecutar aqui los eventos 
        handlers.forEach(callback => {
            callback();
        })
    }

}