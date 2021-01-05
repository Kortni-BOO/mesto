(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var n=function(){function n(e,r,o){var i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),t(this,"_addLike",(function(e){e.target.classList.toggle("element__button-like__active")})),t(this,"_removeCard",(function(){i._element.remove(),i._element=null})),this._link=e.link,this._name=e.name,this._cardData=e,this._elementTemplate=r,this._handleCardClick=o}var r,o;return r=n,(o=[{key:"_getTemplate",value:function(){return document.querySelector(this._elementTemplate).content.querySelector(".element").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".element__button-like").addEventListener("click",this._addLike),this._element.querySelector(".element__button-trush").addEventListener("click",this._removeCard),this._element.querySelector(".element__image").addEventListener("click",(function(){return e._handleCardClick(e._cardData)}))}},{key:"generateCard",value:function(){this._element=this._getTemplate(),this._setEventListeners();var e=this._element.querySelector(".element__image");return e.src=this._link,this._element.querySelector(".element__text").textContent=this._name,e.alt=this._name,this._element}}])&&e(r.prototype,o),n}();function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=function e(t,n){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r(this,"_showInputError",(function(e){var t=o._formElement.querySelector("#".concat(e.id,"-error"));e.classList.add(o._errorClass),t.textContent=e.validationMessage,t.classList.add(o._inputErrorClass)})),r(this,"_hideInputError",(function(e){var t=o._formElement.querySelector("#".concat(e.id,"-error"));e.classList.remove(o._errorClass),t.classList.remove(o._inputErrorClass),t.textContent=""})),r(this,"_checkInputValidity",(function(e){e.validity.valid?o._hideInputError(e):o._showInputError(e)})),r(this,"_hasInvalidInput",(function(e){return e.some((function(e){return!e.validity.valid}))})),r(this,"_setButtonState",(function(e,t){o._hasInvalidInput(e)?o.clearButton(t):(t.classList.remove(o._inactiveButtonClass),t.disabled=!1)})),r(this,"clearButton",(function(e){e.classList.add(o._inactiveButtonClass),e.disabled=!0})),r(this,"resetValidation",(function(){o._formElement.querySelectorAll(o._inputSelector).forEach((function(e){e.classList.remove(o._errorClass)})),o._formElement.querySelectorAll(".popup__input-error").forEach((function(e){e.classList.remove(o._inputErrorClass),e.textContent=""}))})),r(this,"_setEventListeners",(function(){var e=Array.from(o._formElement.querySelectorAll(o._inputSelector)),t=o._formElement.querySelector(o._submitButtonSelector);e.forEach((function(n){n.addEventListener("input",(function(){o._checkInputValidity(n),o._setButtonState(e,t)}))}))})),r(this,"enableValidation",(function(){o._formElement.addEventListener("submit",(function(e){e.preventDefault()})),o._setEventListeners()})),this._config=t,this._formElement=n,this._errorClass=t.errorClass,this._inputErrorClass=t.inputErrorClass,this._inactiveButtonClass=t.inactiveButtonClass,this._inputSelector=t.inputSlector,this._submitButtonSelector=t.submitButtonSelector},i={formSelector:".popup__form",inputSlector:".popup__input",submitButtonSelector:".popup__submit_active",inactiveButtonClass:"popup__submit_inactive",inputErrorClass:"popup__input-error_active",errorClass:"form__input_type_error"},u=document.querySelector(".profile__button-add"),c=(document.querySelector(".popup_profile-edit"),document.querySelector(".profile__button-edit"),document.querySelector(".popup__close_profile-edit"),document.querySelector(".popup__form_profile-edit"),document.querySelector(".popup__input_assignment_author-name")),a=document.querySelector(".popup__input_assignment_author-job"),s=document.querySelector(".profile__name"),l=document.querySelector(".profile__job"),p=document.querySelector(".popup_profile-add"),f=document.querySelector(".popup__input_assignment_place-name"),_=document.querySelector(".popup__input_assignment_place-link"),m=(document.querySelector(".popup__form_profile-add"),document.querySelector(".popup_profile-image")),d=document.querySelector(".popup__image"),y=(document.querySelector(".popup__close_image"),document.querySelector(".popup__name")),h=document.querySelector(".popup__create"),v=document.querySelector(".popup__form_profile-add"),b=document.querySelector(".elements__list");function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var g=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._initialArray=r,this._renderer=o,this._container=n}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.append(e)}},{key:"renderItems",value:function(){var e=this;this._initialArray.forEach((function(t){e._renderer(t)}))}}])&&S(t.prototype,n),e}();function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),k(this,"_closeByEscape",(function(e){27===e.keyCode&&n.closePopup()})),k(this,"_closeByOverlayClick",(function(e){e.target.classList.contains("popup")&&n.closePopup()})),this._popup=t}var t,n;return t=e,(n=[{key:"openPopup",value:function(){this._popup.classList.add("popup_is-opened"),document.addEventListener("mousedown",this._closeByOverlayClick),document.addEventListener("keydown",this._closeByEscape)}},{key:"closePopup",value:function(){this._popup.classList.remove("popup_is-opened"),document.removeEventListener("mousedown",this._closeByOverlayClick),document.removeEventListener("keydown",this._closeByEscape)}},{key:"setEventListeners",value:function(){var e=this;this._popup.querySelector(".popup__close").addEventListener("click",(function(){e.closePopup()}))}}])&&E(t.prototype,n),e}();function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t,n){return(O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=j(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function q(e,t){return(q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e,t){return!t||"object"!==C(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&q(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(r);if(o){var n=j(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return P(this,e)});function u(e){var t,n=e.popupSelector,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,n))._popupSelector=n,t._handleFormSubmit=r,t}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputList=this._popupSelector.querySelectorAll(".popup__input"),this._formValues={},this._inputList.forEach((function(t){return e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;O(j(u.prototype),"setEventListeners",this).call(this),this._popupSelector.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}}])&&L(t.prototype,n),u}(w);function I(e){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function R(e,t,n){return(R="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=D(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function T(e,t){return(T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function V(e,t){return!t||"object"!==I(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function D(e){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=D(r);if(o){var n=D(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return V(this,e)});function u(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),i.call(this,e)}return t=u,(n=[{key:"openPopup",value:function(e){R(D(u.prototype),"openPopup",this).call(this),this._photo=e.link,this._title=e.name,d.src=e.link,y.textContent=e.name}}])&&x(t.prototype,n),u}(w);function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var F=function(){function e(t){var n=t.userName,r=t.userJob;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=n,this._userJob=r}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,info:this._userJob.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.info;this._userName.textContent=t,this._userJob.textContent=n}}])&&N(t.prototype,n),e}(),J=document.querySelector(".popup_profile-edit"),U=new F({userName:s,userJob:l}),z=new B({popupSelector:J,handleFormSubmit:function(){U.setUserInfo({name:c.value,info:a.value}),z.closePopup(),z.setEventListeners()}});z.setEventListeners();var M=document.querySelector(".profile__button-edit"),G=U.getUserInfo();M.addEventListener("click",(function(){z.openPopup(),c.value=G.name,a.value=G.info}));var W=new A(m);function Y(e){W.openPopup(e),W.setEventListeners()}W.setEventListeners();var H=function(e){return new n(e,".template",Y).generateCard()},K=new B({popupSelector:p,handleFormSubmit:function(){var e,t=f.value;e={link:_.value,name:t},b.prepend(H(e)),K.closePopup()}});K.setEventListeners(),u.addEventListener("click",(function(){K.openPopup(),Z.clearButton(h),Z.resetValidation(),v.reset()}));var Q=new g({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Якутия",link:"https://pbs.twimg.com/media/D4hfG93W4AY4h_V.jpg"},{name:"Мурманск",link:"https://travel-or-die.ru/wp-content/uploads/2018/07/Ekskursiya-iz-Murmanska-Severnoe-siyanie-.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){var t=H(e);Q.addItem(t)}},b);Q.renderItems();var X=new o(i,J),Z=new o(i,p);X.enableValidation(),Z.enableValidation()})();
//# sourceMappingURL=index.js.map