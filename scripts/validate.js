
const showInputError = (formElement, inputElement, config) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(config.errorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(config.inputErrorClass);
  };
  
  const hideInputError = (formElement, inputElement, config) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(config.errorClass);
    errorElement.classList.remove(config.inputErrorClass);
    errorElement.textContent = '';
  };
  
  const checkInputValidity = (formElement, inputElement, config) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, config);
    } else {
      hideInputError(formElement, inputElement, config);
    }
  };
  /* Не активная кнопка */
  const setButtonState = (button, isActive, config) => {
      if(isActive) {
          button.classList.remove(config.inactiveButtonClass);
          button.disabled = false;
      } else {
          button.classList.add(config.inactiveButtonClass);
          button.disabled = true;
      }
  }
  /* конец функции */
  
  const setEventListeners = (formElement, config) => {
    const inputList = Array.from(formElement.querySelectorAll(config.inputSlector));
    //ищем кнопки
    const submitButton = formElement.querySelector(config.submitButtonSelector);
    //нашли
    
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement, config);
        //вызываем функцию для кнопок
        setButtonState(submitButton, formElement.checkValidity(), config);
      });
    });
    
  };

  const enableValidation = (config) => {
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

      setEventListeners(formElement, config);
  });
  }

  const validationConfig = {
    formSelector: '.popup__form',
    inputSlector: '.popup__input',
    submitButtonSelector: '.popup__submit_active',
    inactiveButtonClass: 'popup__submit_inactive',
    inputErrorClass: 'popup__input-error_active',
    errorClass: 'form__input_type_error',

  }

enableValidation(validationConfig);

