"use strict";
class LibraryImpl {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    getItem(id) {
        return this.items.find((item) => item.id === id) || null;
    }
    listAvailableItems() {
        return this.items;
    }
}
