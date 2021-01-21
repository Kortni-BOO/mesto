import './index.css';
import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js';
import DeletePicturePopup from '../scripts/components/DeletePicturePopup.js'
import {initialCards, validationConfig}  from '../scripts/utils/constants.js';
import Section from '../scripts/components/Section.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import {popupFormUpdate,popupRemove, popupAv,popupUpdate, popupOpenAvatar, profileAvatar, popupPhoto, popupPhotoName,nameInput, jobInput,profileName, profileJob, placeName, placeLink, bigPhoto,buttonCreateCard,popupFormAdd,popupProfileAdd,popupOpenButtonAdd, elements, popupOpenButton} from '../scripts/utils/constants.js';
import PopupWidthImage from '../scripts/components/PopupWithImage.js'
import UserInfo from '../scripts/components/UserInfo.js';
import Api from '../scripts/components/Api.js';



let userId = null;
const api = new Api({
    address: 'https://mesto.nomoreparties.co',
    token: '39d70764-e5af-4ea0-b4da-e670479603af',
    groupId: 'cohort-19',
})

const userInform = new UserInfo(profileName, profileJob, profileAvatar , userId);
api.getUserInformation({
    token: '39d70764-e5af-4ea0-b4da-e670479603af',})
        .then((res) => {
            userInform.setUserInfo(res.name, res.about, res.avatar, res._id);
        })   
        .catch(err => console.log(`Ошибка при получении данных о пользователе: ${err}`));

const popupProfileEdit = document.querySelector('.popup_profile-edit');

const popupEdit = new PopupWithForm({popupSelector:popupProfileEdit, 
    handleFormSubmit: () => {
        api.editUserInformation({name:nameInput.value, about:jobInput.value})
            .then((res) => {
                userInform.setUserInfo(res.name, res.about);
        })
            .catch(err => console.log(`Ошибка при обновлении данных: ${err}`));
    popupEdit.closePopup();
    }
});

const popupPhotoBig = new PopupWidthImage({popupSelector: bigPhoto, link: popupPhoto, name:popupPhotoName});

const popupUpdateUser = new PopupWithForm({popupSelector: popupUpdate,
    handleFormSubmit: () => {
        const userAvatar = popupAv.value;
        popupUpdateUser.renderLoading(true);
        api.editAvatarUser({avatar: userAvatar})
            .then((res) => {
                userInform.setUserAvatar(res.avatar)
            }) 
            .catch(err => console.log(`Ошибка при обновлении аватфра: ${err}`))
            .finally(() => {
                popupUpdateUser.renderLoading(false);
                popupUpdateUser.closePopup();
            })

    }

})
const formUpdate = new FormValidator(validationConfig, popupUpdate);
formUpdate.enableValidation();

popupOpenAvatar.addEventListener('click', () => {
    popupFormUpdate.reset();
    popupUpdateUser.openPopup()
});
formUpdate.resetValidation();

popupUpdateUser.setEventListeners();
let carddel = null;

const deleteCardPopup = new DeletePicturePopup(popupRemove, { 
        handleFormSubmit: () => {
             api.removeCard(carddel.getId())
            .then(() => {
                carddel.removeCard();
            })
            .catch(err => console.log(`ошибка при удалении ${err}`))
            .finally(() => {
                deleteCardPopup.closePopup();
            })
        }
})
deleteCardPopup.setEventListeners();

const createCard = (data) => {
    const card = new Card({data,
         handleCardClick: () => {
            popupPhotoBig.openPopup(data);
            popupPhotoBig.setEventListeners();   
         }, 
         handleDeleteButtonClick: () => {
             deleteCardPopup.openPopup();
             carddel = card;
            }
         ,
         addLike: () => {
             api.addLike(data._id)
                .then(res =>  {card.countLike(res)})
                .catch(err => console.log(`ошибка лайка ${err}`))
         },
         removeLike: () => {
            api.removeLike(data._id)
                .then(res => card.countLike(res))
                .catch(err => console.log(`ошибка дизлайка ${err}`))
         },
        
        }, '.template', userInform.getUserInfo().id);

    return card;
};

const popupAdd = new PopupWithForm({
    popupSelector:popupProfileAdd,
    handleFormSubmit: () => {
        popupAdd.renderLoading(true);
        const nameValue = placeName.value;
        const linkValue = placeLink.value;
        api.addCard({name:nameValue, link:linkValue})
            .then((res) => {
                const card = createCard(res);
                const cardElem = card.generateCard();
                cardTemp.addItem(cardElem, false)
        
        })
        .catch(err => console.log(`Ошибка при создании карточки: ${err}`))
        .finally(() => {
            popupAdd.renderLoading(false);
            popupAdd.closePopup();
        })    
}   
})

popupAdd.renderLoading(true);

const cardTemp = new Section({
    renderer: (data) => {
        const element = createCard(data);
        const cardElement = element.generateCard()
        cardTemp.addItem(cardElement, true);
    }
}, elements);

api.getInitialCards()
    .then(result => {
        cardTemp.renderItems(result);
    })
    .catch(err => console.log(`Ошибка при получении карточки: ${err}`));

//Валидация

const formEdit = new FormValidator(validationConfig, popupProfileEdit);
const formAdd = new FormValidator(validationConfig, popupProfileAdd);

formEdit.enableValidation();
formAdd.enableValidation();

popupEdit.setEventListeners();
popupOpenButton.addEventListener('click', () => {
    const currentUserInfo = userInform.getUserInfo();
    popupEdit.openPopup();
    nameInput.value = currentUserInfo.name;
    jobInput.value = currentUserInfo.about;
});

popupPhotoBig.setEventListeners();
popupAdd.setEventListeners();
popupOpenButtonAdd.addEventListener('click', () => {
    popupAdd.openPopup();
    formAdd.clearButton(buttonCreateCard);
    formAdd.resetValidation();
    popupFormAdd.reset();
});

