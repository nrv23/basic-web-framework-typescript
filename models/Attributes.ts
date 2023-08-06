
export class Attributes<T extends object>  {

    constructor(private data: T) {

    }

    get = <K extends keyof T>(key: K): T[K] => { // indica que el parametro es una propiedad de la interfaz IUserProps, si se pasa como parametro
        // un nombre de propiedad que no exuiste en a interfaz entonces da error,
        return this.data[key];
    }

    set(update: T): void {
        Object.assign(this.data, update)
    }
}

