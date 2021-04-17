export let initialCards = [
];
export const cards = document.querySelector('.elements');
export const cardsTempalte = document.querySelector('#cards-tempalte').content;
export const imgPopUp = document.querySelector('.popup_type_img-popup');
export const profileInfo = document.querySelector('.profile__info');
export const authorPopUp = document.querySelector('.popup_type_author');
export const authorPopUpSmbBtn = authorPopUp.querySelector('.popup__submit-btn');
export const profileName = profileInfo.querySelector('.profile__title')
export const popupDescr = authorPopUp.querySelector('.popup__input_type_description');
export const profileDescription = profileInfo.querySelector('.profile__subtitle');
export const nameInput = authorPopUp.querySelector('.popup__input_type_name');
export const editButton = document.querySelector('.profile__edit-button');
export const closeButton = authorPopUp.querySelector('.popup__close-btn');
export const popUpAddPlace = document.querySelector('.popup_type_add-place');
export const placeAddButton = document.querySelector('.profile__add-button');
export const placeSbmtButton = popUpAddPlace.querySelector('.popup__submit-btn');
export const placeAddCloseButton = popUpAddPlace.querySelector('.popup__close-btn');
export const imgTitle = imgPopUp.querySelector('.popup__img-title');
export const picture = imgPopUp.querySelector('.popup__picture');
export const popupOverlay = document.querySelectorAll('.popup__overlay');
export const cardsTempalteSelector = '#cards-tempalte';
export const imgPopUpSelector = '.popup_type_img-popup';
export const removePopUpSelector = '.popup_type_remove-card';
export const removeBtnSelector = '.element__remove-btn';
export const avatar = document.querySelector('.profile__avatar');
export const avatarEditBtn = document.querySelector('.profile__avatar-edit');
export const avatarPopUpSelector = '.popup_type_edit-avatar';
export const popUpAvatar = document.querySelector(avatarPopUpSelector);
export const avatarSbmtButton = popUpAvatar.querySelector('.popup__submit-btn');

export const formAuthor = authorPopUp.querySelector('.popup__form_type_author');
export const formAddPlace = document.querySelector('.popup__form_type_add-place');
export const formAvatar = document.querySelector('.popup__form_type_edit-avatar');

export const placeName = formAddPlace.querySelector('.popup__input_type_place-name');
export const placePhoto = formAddPlace.querySelector('.popup__input_type_photo');

export const authorPopUpSelector = '.popup_type_author';
export const nameInputSelector = '.popup__input_type_name';
export const descriptionInputSelector = '.popup__input_type_description';
export const addPlacePopUpSelector = '.popup_type_add-place';
export const placeNameInputSelector = '.popup__input_type_place-name';
export const placePhotoInputSelector = '.popup__input_type_photo';
export const savingText = 'Сохранение...';
export const saveText = 'Сохранить';

export const userSelectors = {
  name: '.profile__title',
  authorInfo: '.profile__subtitle',
  avatar: '.profile__avatar'
};

export const validationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-btn',
  inactiveButtonClass: 'popup__submit-btn_condition_inactive',
  inputErrorClass: 'popup__input_condition_warning',
  errorClass: 'popup__input-warning_active',
  inputErrorSelector: '.popup__input_condition_warning',
  errorSelector: '.popup__input-warning_active'
};

export const apiSettings = {
  token: 'd3c067e5-dfe9-4c66-9aca-7fc30c1afb49',
  groupId: 'cohort-21',
  url: 'https://mesto.nomoreparties.co/v1/',
  cardsUrl: 'https://mesto.nomoreparties.co/v1/cohort-21/cards',
  cardsLikeUrl: 'https://mesto.nomoreparties.co/v1/cohort-21/cards/likes',
  userUrl: 'https://mesto.nomoreparties.co/v1/cohort-21/users/me',
  updateAvatarUrl: 'https://mesto.nomoreparties.co/v1/cohort-21/users/me/avatar'
};