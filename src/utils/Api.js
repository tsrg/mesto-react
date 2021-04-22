const apiSettings = {
	token: 'd3c067e5-dfe9-4c66-9aca-7fc30c1afb49',
	groupId: 'cohort-21',
	url: 'https://mesto.nomoreparties.co/v1/',
	cardsUrl: 'https://mesto.nomoreparties.co/v1/cohort-21/cards',
	cardsLikeUrl: 'https://mesto.nomoreparties.co/v1/cohort-21/cards/likes',
	userUrl: 'https://mesto.nomoreparties.co/v1/cohort-21/users/me',
	updateAvatarUrl: 'https://mesto.nomoreparties.co/v1/cohort-21/users/me/avatar'
  };

//import apiSettings from './constants'

const handleOriginalResponse = (res) => {
	if (!res.ok) {
		return Promise.reject(`Error: ${res.status}`);
	}
	return res.json();
};

class Api {
	constructor(apiSettings) {
		this.apiSettings = apiSettings;
	}

	getCards() {
		return fetch(this.apiSettings.cardsUrl, {
			headers: {
				authorization: this.apiSettings.token,
			},
		})
			.then(handleOriginalResponse)
			.catch((err) => {
				console.log(`Загрузка карточек. Ошибка: ${err}`);
			});
	}

	addNewCard(name, link) {
		return fetch(this.apiSettings.cardsUrl, {
			method: "POST",
			headers: {
				authorization: this.apiSettings.token,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name: name,
				link: link,
			}),
		})
			.then(handleOriginalResponse)
			.catch((err) => {
				console.log(`Добавление карточки. Ошибка: ${err}`);
			});
	}

	getUserInfo() {
		return fetch(this.apiSettings.userUrl, {
			headers: {
				authorization: this.apiSettings.token,
			},
		})
			.then(handleOriginalResponse)
			.catch((err) => {
				console.log(`Загрузка информации о пользователе. Ошибка: ${err}`);
			});
	}

	sendUserInfo(name, info) {
		return fetch(this.apiSettings.userUrl, {
			method: "PATCH",
			headers: {
				authorization: this.apiSettings.token,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name: name,
				about: info,
			}),
		})
			.then(handleOriginalResponse)
			.catch((err) => {
				console.log(`Сохранение информации о пользователе. Ошибка: ${err}`);
			});
	}

	removeCard(cardId) {
		return fetch(`${this.apiSettings.cardsUrl}/${cardId}`, {
			method: "DELETE",
			headers: {
				authorization: this.apiSettings.token,
			},
		})
			.then(handleOriginalResponse)
			.catch((err) => {
				console.log(`Удаление карточки. Ошибка: ${err}`);
			});
	}

	addLike(cardId) {
		return fetch(`${this.apiSettings.cardsLikeUrl}/${cardId}`, {
			method: "PUT",
			headers: {
				authorization: this.apiSettings.token,
			},
		})
			.then(handleOriginalResponse)
			.catch((err) => {
				console.log(`Добавление лайка. Ошибка: ${err}`);
			});
	}

	removeLike(cardId) {
		return fetch(`${this.apiSettings.cardsLikeUrl}/${cardId}`, {
			method: "DELETE",
			headers: {
				authorization: this.apiSettings.token,
			},
		})
			.then(handleOriginalResponse)
			.catch((err) => {
				console.log(`Удаление лайка. Ошибка: ${err}`);
			});
	}

	updateAvatar(url) {
		return fetch(this.apiSettings.updateAvatarUrl, {
			method: "PATCH",
			headers: {
				authorization: this.apiSettings.token,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				avatar: url,
			}),
		})
			.then(handleOriginalResponse)
			.catch((err) => {
				console.log(`Обновление аватара. Ошибка: ${err}`);
			});
	}
}

const api = new Api(apiSettings);
export default api;