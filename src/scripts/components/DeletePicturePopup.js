import Popup from './Popup.js';
export default class DeletePicturePopup extends Popup {
    constructor(popupSelector, {handleFormSubmit}) {
        super(popupSelector);
        this._popupSelector = popupSelector;
        this._handleFormSubmit = handleFormSubmit;
        this._form = document.querySelector('.popup__form_card-delete');
        
    }
    //setSubmitAction(action) {
     //   this._handleFormSubmitCallback = action;
    //}

  

    setEventListeners() {
        super.setEventListeners();

        this._form.addEventListener('submit', (evt) => {
            
            evt.preventDefault();
            //this._handleFormSubmitCallback();
            this._handleFormSubmit(this);
        }) 
        

        
    }
   

}
//{handleFormSubmit}