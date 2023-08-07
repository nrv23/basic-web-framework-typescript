import { Collection } from '../models/Collection';


export abstract class CollectionView<T, K> {

    constructor(public parent: Element, public collection: Collection<T, K>) {

    }

    abstract renderItem(model: T, itemParent: Element): void;

    render() {

        this.parent.innerHTML = '';
        const template = document.createElement("template");

        for (const model of this.collection.models) {

            const itemParent = document.createElement("div");
            this.renderItem(model, itemParent);
            template.content.append(itemParent);
        }

        this.parent.append(template.content);
    }
}