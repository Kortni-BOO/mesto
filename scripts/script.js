


const popup = document.querySelector('.popup')
const popupOpenButton = document.querySelector('.js-profile__open-popup')
const popupCloseButton = document.querySelector('.popup__close')




// const popupToggle = function() {
//     popup.classList.toggle('popup__is-opened')
// }

const popupAdd = function() {
    popup.classList.add('popup__is-opened')
}

const popupRemove = function() {
    popup.classList.remove('popup__is-opened')
}

popupOpenButton.addEventListener('click', popupAdd)
popupCloseButton.addEventListener('click', popupRemove)



const formElement = document.querySelector('.popup__form')
const PopupSaveButton = document.querySelector('.popup__save')
const nameInput = document.querySelector('.form__name')
const jobInput = document.querySelector('.form__job')
const profileName = document.querySelector('.profile__name')
const profileJob = document.querySelector('.profile__job')


 function formSubmitHandler (evt) {
    evt.preventDefault(); 

    // nameInput.value;
    // jobInput.value;
    // profileName.textContent = "Жак-Ив Кусто";
    // profileJob.textContent = "Исследователь океана";
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;

}



formElement.addEventListener('submit', formSubmitHandler);
PopupSaveButton.addEventListener('click', popupRemove);