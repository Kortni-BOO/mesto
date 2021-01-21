export const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Якутия',
        link: 'https://pbs.twimg.com/media/D4hfG93W4AY4h_V.jpg'
    },
    {
        name: 'Мурманск',
        link: 'https://travel-or-die.ru/wp-content/uploads/2018/07/Ekskursiya-iz-Murmanska-Severnoe-siyanie-.jpg'
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
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

export const validationConfig = {
    formSelector: '.popup__form',
    inputSlector: '.popup__input',
    submitButtonSelector: '.popup__submit_active',
    inactiveButtonClass: 'popup__submit_inactive',
    inputErrorClass: 'popup__input-error_active',
    errorClass: 'form__input_type_error',

}


export const ESC_KEY = 27;
export const popupOpenButtonAdd = document.querySelector('.profile__button-add');
export const popupProfileEdit = document.querySelector('.popup_profile-edit');
export const popupOpenButton = document.querySelector('.profile__button-edit');
export const popupCloseButton = document.querySelector('.popup__close_profile-edit');
export const formProfileElement = document.querySelector('.popup__form_profile-edit');
export const nameInput = document.querySelector('.popup__input_assignment_author-name');
export const jobInput = document.querySelector('.popup__input_assignment_author-job');
export const profileName = document.querySelector('.profile__name');
export const profileJob = document.querySelector('.profile__job');

export const profileAvatar = document.querySelector('.profile__avatar');
//export const popupOpenAdd = document.querySelector('.profile__button-add');
export const popupProfileAdd = document.querySelector('.popup_profile-add');
export const placeName = document.querySelector('.popup__input_assignment_place-name');
export const placeLink = document.querySelector('.popup__input_assignment_place-link');

export const popupCreate = document.querySelector('.popup__form_profile-add');
// попап большое фото
export const bigPhoto = document.querySelector('.popup_profile-image');
export const popupPhoto = document.querySelector('.popup__image');


//закрыть картинку========+++++++++++++++++++++++++++++++++++++++++++
export const popupImageClose = document.querySelector('.popup__close_image'); 
export const popupPhotoName = document.querySelector('.popup__name');
export const buttonCreateCard = document.querySelector('.popup__create'); //кнопка сабмита для добавления
export const popupFormAdd = document.querySelector('.popup__form_profile-add');
export const elements = document.querySelector('.elements__list');

