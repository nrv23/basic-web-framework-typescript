"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionView = void 0;
class CollectionView {
    constructor(parent, collection) {
        this.parent = parent;
        this.collection = collection;
    }
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
exports.CollectionView = CollectionView;
