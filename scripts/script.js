import Card from './Card.js';
import FormValidator from './FormValidator.js';
import {initialCards, validationConfig}  from './utils.js';


function openPopup(popup) {
    popup.classList.add('popup_is-opened');
    document.addEventListener('mousedown', closeByOverlayClick);
    document.addEventListener('keydown', closeByEscape); 
}

function closePopup(popup) {
    popup.classList.remove('popup_is-opened');
    document.removeEventListener('mousedown', closeByOverlayClick);
    document.removeEventListener('keydown', closeByEscape);
}

// закрыть кликом по оверлею
function closeByOverlayClick(evt) {
    const handleElement = evt.target;
    if (handleElement.classList.contains('popup')) {
        closePopup(handleElement);
    }
}

const ESC_KEY = 27;
// закрыть по нажатию на эскейп
function closeByEscape(evt) {
    if (evt.keyCode === ESC_KEY) {
        const openedPopup = document.querySelector('.popup_is-opened');
        closePopup(openedPopup);
    }
}
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
const elements = document.querySelector('.elements__list');
const popupCreate = document.querySelector('.popup__form_profile-add');
// попап большое фото
const bigPhoto = document.querySelector('.popup_profile-image');
const popupPhoto = document.querySelector('.popup__image');
const popupImageClose = document.querySelector('.popup__close_image');
const popupPhotoName = document.querySelector('.popup__name');
const buttonCreateCard = document.querySelector('.popup__create'); //кнопка сабмита для добавления
const popupFormAdd = document.querySelector('.popup__form_profile-add'); // для ресета

//функция открывает попап для добавления
function openAdd() {
    formAdd.clearButton(buttonCreateCard);
    formAdd.resetValidation();
    openPopup(popupProfileAdd);
    popupFormAdd.reset();

}
popupOpenAdd.addEventListener('click', openAdd);
popupCloseAdd.addEventListener('click', () => { closePopup(popupProfileAdd); });
//---------------------------- Редактирование ----------------

function openEdit() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    openPopup(popupProfileEdit);
    formEdit.resetValidation();
}
popupOpenButton.addEventListener('click', openEdit);
popupCloseButton.addEventListener('click', () => closePopup(popupProfileEdit));

function submitProfileForm(evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(popupProfileEdit); 
}
formProfileElement.addEventListener('submit', submitProfileForm);
popupImageClose.addEventListener('click', () => { closePopup(bigPhoto); });

function onImageClick(data) {
    openPopup(bigPhoto);
    popupPhoto.src = data.link;
    popupPhotoName.innerText = data.name; 
}

const createCard = (data) => {
    const card = new Card(data, '.template', onImageClick);
    const elementCard = card.generateCard();
    return elementCard;
};

const renderCard = (data, wrap, isPrepend) => {
    if(isPrepend) {
        wrap.prepend(createCard(data));
    } else {
        wrap.append(createCard(data));
    }
};

initialCards.forEach((data) => renderCard(data ,elements, false));

//добавим новую карточку
function addCard() {
    //evt.preventDefault();
    const nameValue = placeName.value;
    const linkValue = placeLink.value;

    renderCard(({
        link: linkValue,
        name: nameValue,
    }), elements, true);
    
    closePopup(popupProfileAdd);
}
popupCreate.addEventListener('submit', addCard);
//Валидация
const formEdit = new FormValidator(validationConfig, popupProfileEdit);
const formAdd = new FormValidator(validationConfig, popupProfileAdd);
formEdit.enableValidation();
formAdd.enableValidation();
