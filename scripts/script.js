import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';
import {openPopup, closePopup}  from './utils.js';
import {validationConfig} from './config.js';

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];
//кнопка для редактирования профиля

const popupProfileEdit = document.querySelector('.popup_profile-edit');
const popupOpenButton = document.querySelector('.profile__button-edit');
const popupCloseButton = document.querySelector('.popup__close_profile-edit');
const formProfileElement = document.querySelector('.popup__form_profile-edit');
const nameInput = document.querySelector('.popup__input_assignment_author-name');
const jobInput = document.querySelector('.popup__input_assignment_author-job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
//кнопка добавление карточки
const popupOpenAdd = document.querySelector('.profile__button-add');
const popupProfileAdd = document.querySelector('.popup_profile-add');
const popupCloseAdd = document.querySelector('.popup__close_profile-add');
//переменные для добавление карточки в контейнер
const placeName = document.querySelector('.popup__input_assignment_place-name');
const placeLink = document.querySelector('.popup__input_assignment_place-link');
const elementTemplate = document.querySelector('.template').content;
const elements = document.querySelector('.elements__list');
const popupCreate = document.querySelector('.popup__form_profile-add');

// попап большое фото
const bigPhoto = document.querySelector('.popup__profile-image');
const popupPhoto = document.querySelector('.popup__image');
const popupImageClose = document.querySelector('.popup__close_image');
const popupPhotoName = document.querySelector('.popup__name');


const buttonCreateCard = document.querySelector('.popup__create'); //кнопка сабмита для добавления
//функция открывает попап для добавления
function openAdd() {
    openPopup(popupProfileAdd);
    placeName.value = ''; 
    placeLink.value = '';
    buttonCreateCard.classList.add('popup__submit_inactive');
    buttonCreateCard.disabled = true;

}
popupOpenAdd.addEventListener('click', openAdd);


popupCloseAdd.addEventListener('click', () => { closePopup(popupProfileAdd) })
//---------------------------- Редактирование ----------------

function openEdit() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    openPopup(popupProfileEdit);
}
popupOpenButton.addEventListener('click', openEdit);


popupCloseButton.addEventListener('click', () => { closePopup(popupProfileEdit) })


function submitProfileForm (evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(popupProfileEdit); 
}
formProfileElement.addEventListener('submit', submitProfileForm);




popupImageClose.addEventListener('click', () => { closePopup(bigPhoto) });



const renderCard = (data, wrap) => {
    const card = new Card(data, '.template');
    const elementCard = card.generateCard();
    wrap.prepend(elementCard);
   
}



initialCards.forEach((data) => {
    const card = new Card(data, '.template');
    const elementCard = card.generateCard();

    document.querySelector('.elements__list').append(elementCard);

});

//добавим новую карточку
function addCard(evt) {
    evt.preventDefault();
    const nameValue = placeName.value;
    const linkValue = placeLink.value;

    renderCard(({
        link: linkValue,
        name: nameValue,
    }), elements);
    
    closePopup(popupProfileAdd);
}
popupCreate.addEventListener('submit', addCard);



/* НАДО РАЗОБРАТЬСЯ 
const validationConfig = {
    formSelector: '.popup__form',
    inputSlector: '.popup__input',
    submitButtonSelector: '.popup__submit_active',
    inactiveButtonClass: 'popup__submit_inactive',
    inputErrorClass: 'popup__input-error_active',
    errorClass: 'form__input_type_error',

}
*/

const formEdit = new FormValidator(validationConfig, popupProfileEdit);
const formAdd = new FormValidator(validationConfig, popupProfileAdd);
formEdit.enableValidation();
formAdd.enableValidation();
