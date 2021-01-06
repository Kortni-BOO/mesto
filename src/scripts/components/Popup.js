import {ESC_KEY} from '../utils/constants.js';
export default class Popup {
    constructor(popupSelector) {
        this._popup = popupSelector;        
    }
    openPopup() {
        this._popup.classList.add('popup_is-opened');
        document.addEventListener('keydown', this._closeByEscape); 
    }
    
    closePopup() {
        this._popup.classList.remove('popup_is-opened');
        document.removeEventListener('keydown', this._closeByEscape);
    }
    _closeByEscape = (evt) => {
        if (evt.keyCode === ESC_KEY) {
            //const openedPopup = document.querySelector('.popup_is-opened');
            this.closePopup();
        }
    }
    _closeByOverlayClick = (evt) => {
        const handleElement = evt.target;
        if (handleElement.classList.contains('popup')) {
            this.closePopup();
        }
    }
    setEventListeners() {
        this._popup.querySelector('.popup__close')
        .addEventListener('click', () => {this.closePopup()});
    
        this._popup.addEventListener('mousedown', this._closeByOverlayClick);
    }
}

