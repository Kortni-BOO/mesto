export default class FormValidator  {
    constructor(config, formElement) {
        this._config = config;
        this._formElement = formElement;
        this._errorClass = config.errorClass;
        this._inputErrorClass = config.inputErrorClass;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._inputSelector = config.inputSlector;
        this._submitButtonSelector = config.submitButtonSelector;

    }
    _showInputError = (inputElement) => {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add(this._errorClass);
        errorElement.textContent = inputElement.validationMessage;
        errorElement.classList.add(this._inputErrorClass);
    }

    _hideInputError = (inputElement) => {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(this._errorClass);
        errorElement.classList.remove(this._inputErrorClass);
        errorElement.textContent = '';
    }

    _checkInputValidity = (inputElement) => {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement);
        } else {
            this._hideInputError(inputElement);
        }
    }

    _hasInvalidInput = (inputList) => {
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    }

    _setButtonState = (inputList, button) => {
        if(this._hasInvalidInput(inputList)) {
            this.clearButton(button);
        } else {
            button.classList.remove(this._inactiveButtonClass);
            button.disabled = false;
        }
    }

    clearButton = (button) => {
        button.classList.add(this._inactiveButtonClass);
        button.disabled = true;
    }

    resetValidation = () => {
        this._formElement.querySelectorAll(this._inputSelector).forEach((inputElement) => {
            inputElement.classList.remove(this._errorClass);
        });
        this._formElement.querySelectorAll('.popup__input-error').forEach((error) => {
            error.classList.remove(this._inputErrorClass);
            error.textContent = '';
        });

    }

    _setEventListeners = () => {
        const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        //ищем кнопки
        const submitButton = this._formElement.querySelector(this._submitButtonSelector);
        //нашли

        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                //вызываем функцию для кнопок
                this._setButtonState(inputList ,submitButton);
            });
        });
        
    }

    enableValidation = () => {
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        
        this._setEventListeners();
    }

}
