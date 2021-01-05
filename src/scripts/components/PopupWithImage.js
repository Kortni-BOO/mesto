import {popupPhoto, popupPhotoName} from '../utils/constants.js'
import Popup from './Popup.js';
export default class PopupWidthImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);  
    }
    openPopup(data) {
        super.openPopup();
        this._photo = data.link;
        this._title = data.name;
        popupPhoto.src = data.link;
        popupPhotoName.textContent = data.name; 
    }
}
