//кнопка для редактирования профиля
const popup = document.querySelector('.popup');
const popupProfileEdit = document.querySelector('.popup_profile-edit');
const popupOpenButton = document.querySelector('.profile__button-edit');
const popupCloseButton = document.querySelector('.popup__close_profile-edit');
const formElement = document.querySelector('.popup__form_profile-edit');
const nameInput = document.querySelector('.popup__input_assignment_author-name');
const jobInput = document.querySelector('.popup__input_assignment_author-job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
//кнопка добавление карточки
const popupOpenAdd = document.querySelector('.profile__button-add');
const popupProfileAdd = document.querySelector('.popup_profile-add');
const popupCloseAdd = document.querySelector('.popup__close_profile-add');



//открыть попап для карточек
function addCardPopup() {
    popupProfileAdd.classList.add('popup__is-opened');
}
//закрыть попап для карточек
function removeCardPopup() {
    popupProfileAdd.classList.remove('popup__is-opened');
}

//закрыть попап
function toggleRemovePopup() {
    popupProfileEdit.classList.remove('popup__is-opened');
}
//открыть попап для редактирования
function toggleEditPopup() {
    popupProfileEdit.classList.add('popup__is-opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    //popupProfileEdit.classList.add('popup__is-opened');
}
//добавить значение имя и работы
function formSubmitHandler (evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    toggleRemovePopup(); 
   
}
//закрыть попапы по нажатию на оверлей
//--------для редктирования
function closeEditOverlay (event) {
    //console.log(event.target)
    if (event.target.classList.contains('popup') ) {
        toggleRemovePopup();
        
        
    }
    
}
//--------для добавления
function closeAddOverlay (event) {
    //console.log(event.target)
    if (event.target.classList.contains('popup') ) {
        removeCardPopup();
        
    }
    
}
/*что не понятное */
document.addEventListener('keydown', function(event) {
    if(event.keyCode === 27) {
        toggleRemovePopup();
        removeCardPopup();
        removePopupPhoto()
    }
    
});

popupProfileAdd.addEventListener('mousedown', closeAddOverlay) 
popupProfileEdit.addEventListener('mousedown', closeEditOverlay)

popupOpenAdd.addEventListener('click', addCardPopup);
popupCloseAdd.addEventListener('click', removeCardPopup); 

popupOpenButton.addEventListener('click', toggleEditPopup);
popupCloseButton.addEventListener('click', toggleRemovePopup);
formElement.addEventListener('submit', formSubmitHandler);


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

const placeName = document.querySelector('.popup__input_assignment_place-name');
const placeLink = document.querySelector('.popup__input_assignment_place-link');
const elementTemplate = document.querySelector('#element__template').content;
const elements = document.querySelector('.elements__list');
const popupCreate = document.querySelector('.popup__form_profile-add');

//отрисуем карточки

function renderCard(card){
    const elementCard = elementTemplate.cloneNode(true);
    elementCard.querySelector('.element__image').src = card.link;
    elementCard.querySelector('.element__text').innerText = card.name;
    elementCard.querySelector(".element__image").alt = card.name;
    elementCard.querySelector('.element__button-like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__button-like__active');
    });
    
    elementCard.querySelector('.element__button-trush').addEventListener('click', function (event) {
        event.target.parentElement.remove();
    });
    
    elementCard.querySelector('.element__image').addEventListener('click', function(e){
        addPopupPhoto(bigPhoto);
        popupPhoto.src = card.link;
        popupPhotoName.innerText = card.name; 
    });
 
    elements.appendChild(elementCard); 
  
};
function render(){
    elements.innerHTML = '';
    initialCards.forEach(renderCard);
    
};  

//добавим новые карточки
function addCard(evt) {
    evt.preventDefault();
    const nameValue = placeName.value;
    const linkValue = placeLink.value;
    initialCards.unshift({name: nameValue, link: linkValue});
    placeName.value = '';
    placeLink.value = '';
    render();
    removeCardPopup();
    
};
render();


popupCreate.addEventListener('submit', addCard);
    



const bigPhoto = document.querySelector('.popup__profile-image');
const popupPhoto = document.querySelector('.popup__image');
const popupImageClose = document.querySelector('.popup__close_image');
const popupPhotoName = document.querySelector('.popup__name');
//увеличим изображение
function addPopupPhoto() {
    bigPhoto.classList.toggle('popup__is-opened');
}
//закроем изображение
function removePopupPhoto() {
    bigPhoto.classList.remove('popup__is-opened');
}

popupImageClose.addEventListener('click', removePopupPhoto);
bigPhoto.addEventListener('mousedown', function(e){
    if (e.target.classList.contains('popup') ) {
        removePopupPhoto();
        
    }
});


