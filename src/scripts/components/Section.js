export default class Section {
    constructor({ renderer }, containerSelector) {
        //this._initialArray = items;
        this._renderer = renderer;
        //this._container = document.querySelector(containerSelector);
        this._container = containerSelector;
    }
    renderItems(items) {
        items.forEach((item) => {
            this._renderer(item);
        });
    }

    addItem(element, isPrepend) {
        //this._container.append(element);
        if (isPrepend) {
            this._container.append(element);
        } else {
            this._container.prepend(element);
        }
    }
    /*
    renderItems() {
        this._initialArray.forEach(item => {
            this._renderer(item);
        });
    }
    */
}
