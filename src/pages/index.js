import './index.css';
import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js';
import {initialCards, validationConfig}  from '../scripts/utils/constants.js';
import Section from '../scripts/components/Section.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import {nameInput, jobInput,profileName, profileJob, placeName, placeLink, bigPhoto,buttonCreateCard,popupFormAdd,popupProfileAdd,popupOpenButtonAdd, elements} from '../scripts/utils/constants.js';
import PopupWidthImage from '../scripts/components/PopupWithImage.js'
import UserInfo from '../scripts/components/UserInfo.js';

const popupProfileEdit = document.querySelector('.popup_profile-edit');
const UserInform = new UserInfo({userName:profileName, userJob:profileJob});
const popupEdit= new PopupWithForm({
    popupSelector:popupProfileEdit,
    handleFormSubmit: () => {
        UserInform.setUserInfo({name: nameInput.value, info: jobInput.value})
        popupEdit.closePopup();
        popupEdit.setEventListeners();
    }
});
popupEdit.setEventListeners();
const popupOpenButton = document.querySelector('.profile__button-edit');
const currentUserInfo = UserInform.getUserInfo();

popupOpenButton.addEventListener('click', () => {
    popupEdit.openPopup();
    nameInput.value = currentUserInfo.name;
    jobInput.value = currentUserInfo.info;
});

const popupPhotoBig = new PopupWidthImage(bigPhoto);
popupPhotoBig.setEventListeners();

function handleCardClick(data) {
    popupPhotoBig.openPopup(data);
    popupPhotoBig.setEventListeners();
}
const createCard = (data) => {
    const card = new Card(data, '.template', handleCardClick);
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

const popupAdd = new PopupWithForm({
    popupSelector:popupProfileAdd,
    handleFormSubmit: () => {
        const nameValue = placeName.value;
        const linkValue = placeLink.value;
    
        renderCard(({
            link: linkValue,
            name: nameValue,
        }), elements, true);
        
        popupAdd.closePopup();

    }
});
popupAdd.setEventListeners();

popupOpenButtonAdd.addEventListener('click', () => {
    popupAdd.openPopup();
    formAdd.clearButton(buttonCreateCard);
    formAdd.resetValidation();
    popupFormAdd.reset();
});



const cardTemp = new Section({items: initialCards, renderer: (item) => {
    const element = createCard(item);
    cardTemp.addItem(element);
}}, elements);
cardTemp.renderItems();


//Валидация
const formEdit = new FormValidator(validationConfig, popupProfileEdit);
const formAdd = new FormValidator(validationConfig, popupProfileAdd);
formEdit.enableValidation();
formAdd.enableValidation();
