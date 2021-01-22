import Popup from "./Popup.js";
export default class PopupWidthImage extends Popup {
    constructor({ popupSelector, link, name }) {
        super(popupSelector);
        this._photoSrc = link;
        this._photoName = name;
    }
    openPopup(data) {
        super.openPopup();
        this._photo = data.link;
        this._title = data.name;
        this._photoSrc.src = data.link;
        this._photoName.textContent = data.name;
    }
}
