const popup = document.querySelector('.popup')
const popupOpenButton = document.querySelector('.profile__button-edit')
const popupCloseButton = document.querySelector('.popup__close')
const formElement = document.querySelector('.popup__form')
const nameInput = document.querySelector('.popup__input_name')
const jobInput = document.querySelector('.popup__input_job')
const profileName = document.querySelector('.profile__name')
const profileJob = document.querySelector('.profile__job')




// const popupToggle = function() {
//     popup.classList.toggle('popup__is-opened')
// }
function popupAdd() {
    popup.classList.add('popup__is-opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

function popupRemove() {
    popup.classList.remove('popup__is-opened')
}


popupOpenButton.addEventListener('click', popupAdd)
popupCloseButton.addEventListener('click', popupRemove)


 function formSubmitHandler (evt) {
    evt.preventDefault(); 


    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    popupRemove()
    
}

formElement.addEventListener('submit', formSubmitHandler);