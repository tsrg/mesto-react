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
	}

	addNewCard(newCard) {
		return fetch(this.apiSettings.cardsUrl, {
			method: "POST",
			headers: {
				authorization: this.apiSettings.token,
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newCard),
		})
			.then(handleOriginalResponse)
	}

	getUserInfo() {
		return fetch(this.apiSettings.userUrl, {
			headers: {
				authorization: this.apiSettings.token,
			},
		})
			.then(handleOriginalResponse)
	}

	sendUserInfo(data) {
		return fetch(this.apiSettings.userUrl, {
			method: "PATCH",
			headers: {
				authorization: this.apiSettings.token,
				"Content-Type": "application/json",
			},
			body: JSON.stringify(
				data
			),
		})
			.then(handleOriginalResponse)
	}

	removeCard(cardId) {
		return fetch(`${this.apiSettings.cardsUrl}/${cardId}`, {
			method: "DELETE",
			headers: {
				authorization: this.apiSettings.token,
			},
		})
			.then(handleOriginalResponse)
	}

	/*
	changeLikeCardStatus(cardId, isLiked) {
		if (isLiked) {
			return fetch(`${this.apiSettings.cardsLikeUrl}/${cardId}`, {
				method: "PUT",
				headers: {
					authorization: this.apiSettings.token,
				},
			})
				.then(handleOriginalResponse)
		}
		else {
			return fetch(`${this.apiSettings.cardsLikeUrl}/${cardId}`, {
				method: "DELETE",
				headers: {
					authorization: this.apiSettings.token,
				},
			})
				.then(handleOriginalResponse)
		}
	}*/

	changeLikeCardStatus(cardId, isLiked) {
		const method = isLiked ? 'DELETE' : 'PUT';
			return fetch(`${this.apiSettings.cardsLikeUrl}/${cardId}`, {
				method: `${isLiked ? "PUT" : "DELETE"}`,
				headers: {
					authorization: this.apiSettings.token,
				},
			})
				.then(handleOriginalResponse)
	}

	addLike(cardId) {
		return fetch(`${this.apiSettings.cardsLikeUrl}/${cardId}`, {
			method: "PUT",
			headers: {
				authorization: this.apiSettings.token,
			},
		})
			.then(handleOriginalResponse)
	}

	removeLike(cardId) {
		return fetch(`${this.apiSettings.cardsLikeUrl}/${cardId}`, {
			method: "DELETE",
			headers: {
				authorization: this.apiSettings.token,
			},
		})
			.then(handleOriginalResponse)
	}

	updateAvatar(url) {
		return fetch(this.apiSettings.updateAvatarUrl, {
			method: "PATCH",
			headers: {
				authorization: this.apiSettings.token,
				"Content-Type": "application/json",
			},
			body: JSON.stringify(
				url,
			),
		})
			.then(handleOriginalResponse)
	}
}

const api = new Api(apiSettings);
export default api;