export default class FormValidator  {
    constructor(config, formElement) {
        this._config = config;
        this._formElement = formElement;

    }
    _showInputError = (inputElement) => {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add(this._config.errorClass);
        errorElement.textContent = inputElement.validationMessage;
        errorElement.classList.add(this._config.inputErrorClass);
    }

    _hideInputError = (inputElement) => {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(this._config.errorClass);
        errorElement.classList.remove(this._config.inputErrorClass);
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
      };



    _setButtonState = (inputList, button) => {
        if(this._hasInvalidInput(inputList)) {
            button.classList.add(this._config.inactiveButtonClass);
            button.disabled = true;
        } else {
            button.classList.remove(this._config.inactiveButtonClass);
            button.disabled = false;
        }
    }

    _setEventListeners = () => {
        const inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSlector));
        //ищем кнопки
        const submitButton = this._formElement.querySelector(this._config.submitButtonSelector);
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
        
        //const formList = Array.from(document.querySelectorAll(this._config.formSelector));
        //formList.forEach((form) => {
        this._formElement.addEventListener('submit', (evt) => {
          evt.preventDefault();
        });
    
          this._setEventListeners();
      //});
    }

}