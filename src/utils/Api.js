const handleOriginalResponse = (res) => {
	if (!res.ok) {
		return Promise.reject(`Error: ${res.status}`);
	}
	return res.json();
};

export default class Api {
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
