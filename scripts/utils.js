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
function closeByOverlayClick (evt) {
    if (evt.target.classList.contains('popup')) {
        const openedPopup = document.querySelector('.popup_is-opened');
        closePopup(openedPopup);
    }
};

const ESC_KEY = 27;
// закрыть по нажатию на эскейп
function closeByEscape (evt) {
    const openedPopup = document.querySelector('.popup_is-opened');
    if (evt.keyCode === ESC_KEY) {
        closePopup(openedPopup);
    }
}

export {openPopup, closePopup, closeByOverlayClick, closeByEscape} 