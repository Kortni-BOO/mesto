import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
    constructor({ popupSelector, handleFormSubmit }) {
        super(popupSelector);
        this._popupSelector = popupSelector;
        this._handleFormSubmit = handleFormSubmit;
    }
    closePopup() {
        super.closePopup();
    }

    renderLoading(isLoading) {
        const textButton = document.querySelector(".popup__submit");
        if (isLoading) {
            textButton.textContent = "Сохранение...";
        } else {
            return textButton;
        }
    }

    _getInputValues() {
        this._inputList = this._popupSelector.querySelectorAll(".popup__input");
        this._formValues = {};
        this._inputList.forEach(
            (input) => (this._formValues[input.name] = input.value)
        );
        return this._formValues;
    }
    setEventListeners() {
        super.setEventListeners();
        this._popupSelector.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
        });
    }
}
