export default class Card {
    constructor(
        { data, handleCardClick, handleDeleteButtonClick, addLike, removeLike },
        elementTemplate,
        userId
    ) {
        this._link = data.link;
        this._name = data.name;
        this._data = data;
        this._elementTemplate = elementTemplate;
        this._handleCardClick = handleCardClick; //для открытия картинки
        this._handleDeleteButtonClick = handleDeleteButtonClick; //для удаления картинки
        this._userId = userId;
        this._id = data._id;
        this._owner = data.owner._id;
        this._addLike = addLike;
        this._removeLike = removeLike;
        //this._likeButton = this._element.querySelector('.element__button-like');
        //this._activeLikeButton = this._element.querySelector('.element__button-like__active');
    }

    _getTemplate() {
        return document
            .querySelector(this._elementTemplate)
            .content.querySelector(".element")
            .cloneNode(true);
    }

    removeCard = () => {
        this._element.remove();
        this._element = null;
    };

    getId() {
        return this._id;
    }

    addButtonLike() {
        this._element
            .querySelector(".element__button-like")
            .classList.add("element__button-like__active");
        this._addLike();
    }

    removeButtonLike() {
        this._element
            .querySelector(".element__button-like")
            .classList.remove("element__button-like__active");
        this._removeLike();
    }

    checkLikeState() {
        this._data.likes.forEach((likeId) => {
            if (likeId._id === this._userId) {
                this._element
                    .querySelector(".element__button-like")
                    .classList.add("element__button-like__active");
            }
        });
    }
    countLike(data) {
        this._element.querySelector(".element__count").textContent = String(
            data.likes.length
        );
    }

    _setEventListeners() {
        const list = this._element.querySelector(".element__button-like");
        list.addEventListener("click", () => {
            if (list.classList.contains("element__button-like__active")) {
                this.removeButtonLike();
            } else {
                this.addButtonLike();
            }
        });
        //list.addEventListener('click', this._addLike)

        this._element
            .querySelector(".element__button-trush")
            .addEventListener("click", () =>
                this._handleDeleteButtonClick(this._data)
            );
        //this._handleDeleteButtonClick()
        this._element
            .querySelector(".element__image")
            .addEventListener("click", () => this._handleCardClick(this._data));
    }

    generateCard() {
        this._element = this._getTemplate();

        this.checkLikeState();
        this._setEventListeners();
        const elementImage = this._element.querySelector(".element__image");
        elementImage.src = this._link;
        this._element.querySelector(".element__text").textContent = this._name;
        elementImage.alt = this._name;
        //this._element.querySelector('.element__count').textContent = String(this._data.likes.length);
        this.countLike(this._data);

        if (this._owner !== this._userId) {
            this._element.querySelector(".element__button-trush").remove();
        }
        return this._element;
    }
}
