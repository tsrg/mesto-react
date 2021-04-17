import "./index.css";
import {
	initialCards, cards, editButton, placeAddButton, authorPopUp, validationSettings,
	formAuthor,	formAddPlace, userSelectors, nameInput, popupDescr, placeSbmtButton,
	authorPopUpSelector, nameInputSelector, authorPopUpSmbBtn, addPlacePopUpSelector,
	placePhoto, placeName, cardsTempalteSelector, imgPopUpSelector, apiSettings,
	removePopUpSelector, avatar, avatarPopUpSelector, formAvatar,avatarSbmtButton,
	savingText,	avatarEditBtn} from "../utils/constants.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopUpWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import FormValidator from "../components/FormValidator.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import Popup from "../components/PopUp";
import PopupWithOneButton from "../components/PopUpWithOneButton.js";

const api = new Api(apiSettings);

Promise.all([
    api.getUserInfo(),
    api.getCards(),
    ])
    .then(([userInfo, cards]) => {
        user.setUserInfo(userInfo.name, userInfo.about, userInfo._id);
	    user.setUserAvatar(userInfo.avatar);

        cards.forEach((item) => {
            initialCards.push(item);
        });
        initCards.renderItems();
    })
    .catch((err) => {
        console.log(`Ошибка загрузки данных: ${err}`);
    });

function createCard(item) {
	const card = new Card(
		item,
		cardsTempalteSelector,
		imgPopUp.open.bind(imgPopUp),
		openRemovePopUp,
		user._userId,
        addLike,
        removeLike
	);
	return card;
}

function openRemovePopUp(evt) {
	removePopUp.open(evt);
}

//-------------*отправка лайка*------------------------------------------
function addLike(cardId) {
    return api.addLike(cardId)
}
function removeLike(cardId) {
    return api.removeLike(cardId)
}

//----------------------*popUp удаление карточки*-------------------
const removePopUp = new PopupWithOneButton(removePopUpSelector, (evt) => {
	evt.preventDefault();
	console.log(removePopUp.cardId());
	api.removeCard(removePopUp.cardId().id)
		.then(() => {
            removePopUp.cardId().remove(),
            removePopUp.close()});
});

//------ *начальный контент* ----------
const initCards = new Section(cards, {
	data: initialCards,
	renderer: (item) => {
		const card = createCard(item);
		const cardElement = card.createCard();
		initCards.addItem(cardElement);
	},
});

const user = new UserInfo(userSelectors);

//-------------------*PopUp редактирование автора------------------------
const authPopUp = new PopupWithForm(
	authorPopUpSelector,
	function (evt, inputValues) {
		evt.preventDefault();
		const button = evt.target.querySelector(".popup__submit-btn");
		button.value = "Сохранение...";
		api.sendUserInfo(inputValues.authorName, inputValues.athorDescription)
			.then((result) => {
				user.setUserInfo(result.name, result.about);
			})
			.catch((err) => {
				console.log(`Сохранение информации об авторе. Ошибка: ${err}`);
			})
			.finally(() => {
                (button.value = "Сохранить"),
                authPopUp.close()
            });
	}
);

//------------------*PopUp редактирование аватара*----------------------
const avatarPopUp = new PopupWithForm(
	avatarPopUpSelector,
	function (evt, inputValues) {
		evt.preventDefault();
		const button = evt.target.querySelector(".popup__submit-btn");
		button.value = "Сохранение...";
		api.updateAvatar(inputValues.avatar)
			.then(() => {
                (avatar.src = inputValues.avatar)
            })
			.catch((err) => {
				console.log(`Сохранение информации об авторе. Ошибка: ${err}`);
			})
			.finally(() => {
                (button.value = "Сохранить"), avatarPopUp.close()
            });
	}
);

//-------------------*popUp добавить место*------------------------------
const addPopUp = new PopupWithForm(addPlacePopUpSelector, (evt) => {
	evt.preventDefault();
	const button = evt.target.querySelector(".popup__submit-btn");
	button.value = "Сохранение...";
	const item = {};
	item.name = placeName.value;
	item.link = placePhoto.value;
	api.addNewCard(item.name, item.link)
		.then((result) => {
			const newCard = createCard(result);
			const newCardElement = newCard.createCard();
			initCards.addItem(newCardElement);
		})
		.catch((err) => {
			console.log(`Сохранение информации об авторе. Ошибка: ${err}`);
		})
		.finally(() => {
            (button.value = "Создать"), 
            addPopUp.close()
        });
});

//------------------------*popUp картинки*--------------------------
const imgPopUp = new PopupWithImage(imgPopUpSelector);

//--------------*Валидация форм*--------------------------------------------------
const validateFormAuthor = new FormValidator(validationSettings, formAuthor);
validateFormAuthor.enableValidation();
const validateFormAddPlace = new FormValidator(
	validationSettings,
	formAddPlace
);
validateFormAddPlace.enableValidation();
const validateFormAvatar = new FormValidator(validationSettings, formAvatar);
validateFormAvatar.enableValidation();

//------------------------*слушатели событий*-----------------------------------------------------------------
editButton.addEventListener("click", () => {
	nameInput.value = user.getUserInfo().name;
	popupDescr.value = user.getUserInfo().info;
	validateFormAuthor.clearWarnings();
	authPopUp.open();
}); //--откр. popUp инф.пользователя--
placeAddButton.addEventListener("click", () => {
	placeSbmtButton.disabled = true;
	placeSbmtButton.classList.add(validationSettings.inactiveButtonClass);
	addPopUp.open();
	validateFormAddPlace.clearWarnings();
}); //--откр. popUp добавить место----
avatarEditBtn.addEventListener("click", () => {
	avatarSbmtButton.disabled = true;
	avatarSbmtButton.classList.add(validationSettings.inactiveButtonClass);
	avatarPopUp.open();
	validateFormAvatar.clearWarnings();
});

authPopUp.setEventListeners();
imgPopUp.setEventListeners();
addPopUp.setEventListeners();
removePopUp.setEventListeners();
avatarPopUp.setEventListeners();
