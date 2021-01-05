export default class Section {
    constructor({items, renderer}, containerSelector) {
        this._initialArray = items;
        this._renderer = renderer;
        //this._container = document.querySelector(containerSelector);
        this._container = containerSelector;
    }
    addItem(element) {
        this._container.append(element);
    }
    renderItems() {
        this._initialArray.forEach(item => {
            this._renderer(item);
        });
    }
}