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


//открыть попап
function openPopup(popup) {
    popup.classList.add('popup_is-opened');
}
//закрыть попап
function closePopup(popup) {
    popup.classList.remove('popup_is-opened');
}

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
//функция закрывает попап для добавления
function closeAdd() {
    closePopup(popupProfileAdd);
}
popupCloseAdd.addEventListener('click', closeAdd);
//---------------------------- Редактирование ----------------
//открывает попап редактирования профиля
function openEdit() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    openPopup(popupProfileEdit);
}
popupOpenButton.addEventListener('click', openEdit);//удалить3
//закрывает попап редактирования профиля
function closeEdit() {
    closePopup(popupProfileEdit);
}
popupCloseButton.addEventListener('click', closeEdit);
function submitProfileForm (evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(popupProfileEdit); //изменить2 
}
formProfileElement.addEventListener('submit', submitProfileForm);

//попап большое фото _____________________


function addPopupPhoto() {
    bigPhoto.classList.toggle('popup_is-opened');
}
//закроем изображение
function removePopupPhoto() {
    bigPhoto.classList.remove('popup_is-opened');
}

popupImageClose.addEventListener('click', removePopupPhoto);
bigPhoto.addEventListener('mousedown', function(e){
    if (e.target.classList.contains('popup') ) {
        removePopupPhoto();
        
    }
});
/*
//открыть попап для редактирования
function toggleEditPopup() { //удалить3
    popupProfileEdit.classList.add('popup_is-opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    //popupProfileEdit.classList.add('popup__is-opened');
}
//закрыть попап
function toggleRemovePopup() { //удалить2
    popupProfileEdit.classList.remove('popup_is-opened');
}
popupCloseButton.addEventListener('click', toggleRemovePopup);//изменить2
/*
//_____________________++++++++++________________________
//openPopup(popupProfileAdd);

//открыть попап для карточек
/*
function addCardPopup() {
    popupProfileAdd.classList.add('popup_is-opened');
}*/
//------------------------------------------------------
//закрыть попап для карточек
// function removeCardPopup() { //удалить1
//     popupProfileAdd.classList.remove('popup_is-opened');
// }







//добавить значение имя и работы

//закрыть попапы по нажатию на оверлей
//--------для редктирования
function closeEditOverlay (event) {
    //console.log(event.target)
    if (event.target.classList.contains('popup') ) {
        toggleRemovePopup(); //изменить2
        
        
    }
    
}
//--------для добавления
function closeAddOverlay (event) {
    //console.log(event.target)
    if (event.target.classList.contains('popup') ) {
        removeCardPopup(); //изменить1
        
    }
    
}
/*что не понятное */
document.addEventListener('keydown', function(event) {
    if(event.keyCode === 27) {
        toggleRemovePopup();//изменить2
        removeCardPopup();//изменить1
        removePopupPhoto()
    }
    
});

popupProfileAdd.addEventListener('mousedown', closeAddOverlay) 
popupProfileEdit.addEventListener('mousedown', closeEditOverlay)

//popupOpenAdd.addEventListener('click', addCardPopup);


 







const placeName = document.querySelector('.popup__input_assignment_place-name');
const placeLink = document.querySelector('.popup__input_assignment_place-link');
const elementTemplate = document.querySelector('#element__template').content;
const elements = document.querySelector('.elements__list');
const popupCreate = document.querySelector('.popup__form_profile-add');

//делаем карточки

function createCard(card){
    const elementCard = elementTemplate.cloneNode(true);
    const elementImage = elementCard.querySelector('.element__image');
    elementImage.src = card.link;
    elementCard.querySelector('.element__text').innerText = card.name;
    elementImage.alt = card.name;
    elementCard.querySelector('.element__button-like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__button-like__active');
    });

    elementCard.querySelector('.element__button-trush').addEventListener('click', event => {
        const element = event.target.closest('.element');
        if(element) {
            element.remove();
        }
    });

    
    elementCard.querySelector('.element__image').addEventListener('click', function(e){
        addPopupPhoto(bigPhoto);
        popupPhoto.src = card.link; 

        popupPhotoName.innerText = card.name;
        
    });
    
    //elements.appendChild(elementCard); 
    return elementCard;
  
};
//функция для вывода карточек
function renderCard(card, element, isPrepend) {
    if(isPrepend) {
        element.prepend(createCard(card));
    } else {
        element.append(createCard(card));
    }
}
//отрисум массив карточек
initialCards.forEach(card => renderCard(card, elements, false));
//добавим новую карточку
function addCard(evt) {
    evt.preventDefault();
    const nameValue = placeName.value;
    const linkValue = placeLink.value;

    renderCard(({
        link: linkValue,
        name: nameValue,
    }), elements, true);
    
    closePopup(popupProfileAdd);
}
popupCreate.addEventListener('submit', addCard);




const bigPhoto = document.querySelector('.popup__profile-image');
const popupPhoto = document.querySelector('.popup__image');
const popupImageClose = document.querySelector('.popup__close_image');
const popupPhotoName = document.querySelector('.popup__name');
//увеличим изображение



