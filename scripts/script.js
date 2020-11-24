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
const elementTemplate = document.querySelector('#element__template').content;
const elements = document.querySelector('.elements__list');
const popupCreate = document.querySelector('.popup__form_profile-add');

// попап большое фото
const bigPhoto = document.querySelector('.popup__profile-image');
const popupPhoto = document.querySelector('.popup__image');
const popupImageClose = document.querySelector('.popup__close_image');
const popupPhotoName = document.querySelector('.popup__name');


//открыть попап
function openPopup(popup) {
    popup.classList.add('popup_is-opened');
    document.addEventListener('mousedown', closeByOverlayClick);
    document.addEventListener('keydown', closeByEscape);
}
//закрыть попап
function closePopup(popup) {
    popup.classList.remove('popup_is-opened');
    document.removeEventListener('mousedown', closeByOverlayClick);
    document.removeEventListener('keydown', closeByEscape);
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


popupImageClose.addEventListener('click', function () {
    closePopup(bigPhoto);
    }
);


// закрыть кликом по оверлею
function closeByOverlayClick (evt) {
    if (evt.target.classList.contains('popup')) {
        const openedPopup = document.querySelector('.popup_is-opened');
        closePopup(openedPopup);
    }
};


// закрыть по нажатию на эскейп
function closeByEscape (evt) {
    const key = 27;
    const openedPopup = document.querySelector('.popup_is-opened');
    if (evt.keyCode === key) {
        closePopup(openedPopup);
    }
}



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
        //addPopupPhoto(bigPhoto);
        openPopup(bigPhoto);
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