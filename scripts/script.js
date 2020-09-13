const popup = document.querySelector('.popup')
const popupOpenButton = document.querySelector('.profile__button-edit')
const popupCloseButton = document.querySelector('.popup__close')
const formElement = document.querySelector('.popup__form')
const nameInput = document.querySelector('.popup__input_author-name')
const jobInput = document.querySelector('.popup__input_author-job')
const profileName = document.querySelector('.profile__name')
const profileJob = document.querySelector('.profile__job')


function popupAdd() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    popup.classList.add('popup__is-opened');
}

function popupRemove() {
    popup.classList.remove('popup__is-opened')
}
function formSubmitHandler (evt) {
    evt.preventDefault(); 


    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    popupRemove();
    
}

popupOpenButton.addEventListener('click', popupAdd);
popupCloseButton.addEventListener('click', popupRemove);
formElement.addEventListener('submit', formSubmitHandler);