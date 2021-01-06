import './index.css';
import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js';
import {initialCards, validationConfig}  from '../scripts/utils/constants.js';
import Section from '../scripts/components/Section.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import {popupPhoto, popupPhotoName,nameInput, jobInput,profileName, profileJob, placeName, placeLink, bigPhoto,buttonCreateCard,popupFormAdd,popupProfileAdd,popupOpenButtonAdd, elements, popupOpenButton} from '../scripts/utils/constants.js';
import PopupWidthImage from '../scripts/components/PopupWithImage.js'
import UserInfo from '../scripts/components/UserInfo.js';

const popupProfileEdit = document.querySelector('.popup_profile-edit');
const userInform = new UserInfo({userName:profileName, userJob:profileJob});
const popupEdit= new PopupWithForm({
    popupSelector:popupProfileEdit,
    handleFormSubmit: () => {
        userInform.setUserInfo({name: nameInput.value, info: jobInput.value})
        popupEdit.closePopup();
        popupEdit.setEventListeners();
    }
});

const currentUserInfo = userInform.getUserInfo();

const popupPhotoBig = new PopupWidthImage({popupSelector: bigPhoto, link: popupPhoto, name:popupPhotoName});

function handleCardClick(data) {
    popupPhotoBig.openPopup(data);
    popupPhotoBig.setEventListeners();
}
const createCard = (data) => {
    const card = new Card(data, '.template', handleCardClick);
    const elementCard = card.generateCard();
    return elementCard;
};

const popupAdd = new PopupWithForm({
    popupSelector:popupProfileAdd,
    handleFormSubmit: () => {
        const nameValue = placeName.value;
        const linkValue = placeLink.value;
        const element = createCard({
            link: linkValue,
            name: nameValue,
        });
        cardTemp.addItem(element, false);
        popupAdd.closePopup();
    }
});

const cardTemp = new Section({items: initialCards, renderer: (item) => {
    const element = createCard(item);
    cardTemp.addItem(element, true);
}}, elements);
cardTemp.renderItems();

//Валидация
const formEdit = new FormValidator(validationConfig, popupProfileEdit);
const formAdd = new FormValidator(validationConfig, popupProfileAdd);

formEdit.enableValidation();
formAdd.enableValidation();

popupEdit.setEventListeners();
popupOpenButton.addEventListener('click', () => {
    popupEdit.openPopup();
    nameInput.value = currentUserInfo.name;
    jobInput.value = currentUserInfo.info;
});

popupPhotoBig.setEventListeners();
popupAdd.setEventListeners();
popupOpenButtonAdd.addEventListener('click', () => {
    popupAdd.openPopup();
    formAdd.clearButton(buttonCreateCard);
    formAdd.resetValidation();
    popupFormAdd.reset();
});
