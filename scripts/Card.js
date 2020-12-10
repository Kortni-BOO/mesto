import {openPopup} from './utils.js';
const bigPhoto = document.querySelector('.popup__profile-image');
const popupPhoto = document.querySelector('.popup__image');
const popupPhotoName = document.querySelector('.popup__name');

class Card {
    constructor(data, elementTemplate) {
        this._link = data.link;
        this._name = data.name;
        this._elementTemplate = elementTemplate;
    }

    _getTemplate() {
        const elementCard = document
            .querySelector(this._elementTemplate)
            .content
            .querySelector('.element')
            .cloneNode(true);

        return elementCard;
    }

    _addLike() {
        this._element.querySelector('.element__button-like').addEventListener('click', function (evt) {
            evt.target.classList.toggle('element__button-like__active');
        });
    }


    _removeCard = () => {
        this._element.remove();
    }

    _openPopupImage = () => {
            openPopup(bigPhoto);

            popupPhoto.src = this._link; 
            popupPhotoName.innerText = this._name;
            

    }

    _setEventListeners() {
        this._addLike();

        this._element.querySelector('.element__button-trush')
        .addEventListener('click', this._removeCard);

        this._element.querySelector('.element__image')  
        .addEventListener('click', () => {          
            this._openPopupImage();
        });
     

    }


    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
        const elementImage = this._element.querySelector('.element__image');
        elementImage.src = this._link;
        this._element.querySelector('.element__text').textContent = this._name;
        elementImage.alt = this._name;

        return this._element;

    }


}
export {Card}


