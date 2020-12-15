
export default class Card {
    constructor(cardData, elementTemplate, onImageClick) {
        this._link = cardData.link;
        this._name = cardData.name;
        this._cardData = cardData
        this._elementTemplate = elementTemplate;
        this._onImageClick = onImageClick;
    }

    _getTemplate() {
        return document
            .querySelector(this._elementTemplate)
            .content
            .querySelector('.element')
            .cloneNode(true);
    }

    _removeCard = () => {
        this._element.remove();
    }

    _setEventListeners() {
        this._element.querySelector('.element__button-like').addEventListener('click', function (evt) {
            evt.target.classList.toggle('element__button-like__active');
        });

        this._element.querySelector('.element__button-trush')
        .addEventListener('click', this._removeCard);

        this._element.querySelector('.element__image')
        .addEventListener('click',() => this._onImageClick(this._cardData));

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