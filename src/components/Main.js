import React, { useState, useEffect } from 'react';
import api from '../utils/Api';
import Card from '../components/Card';
import { CurrentUserContext } from './CurrentUserContext';

function Main(props) {
    const [cards, addCards] = useState([]);
    const currentUser = React.useContext(CurrentUserContext);

    function handleCardLike(card) {
        // Снова проверяем, есть ли уже лайк на этой карточке
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        console.log(card);

        // Отправляем запрос в API и получаем обновлённые данные карточки
        api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
            addCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        });
    }

    function handleCardDelete(card) {
        api.removeCard(card._id)
        .catch((err) => {
            console.log(`Ошибка удаления каточки:: ${err}`);
        });
    }

    useEffect(() => {
        api.getCards()
        .then((gCards) => {
            addCards(gCards);
        })
        .catch((err) => {
            console.log(`Ошибка загрузки данных: ${err}`);
        });
    }, [])
    return (
        <main>
        <section className="profile">
            <div className="profile__avatar-container">
            <img className="profile__avatar"  src={currentUser.avatar} alt="Аватар" />
            <button className="profile__avatar-edit" onClick={props.onEditProfile}></button>
            </div>
            <div className="profile__info">
                <h1 className="profile__title">{currentUser.name}</h1>
                <button className="profile__edit-button" type="button" onClick={props.onEditAvatar}></button>
                <p className="profile__subtitle">{currentUser.about}</p>
            </div>
            <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
        </section>
        <section className="elements">
            {
            cards.map(card => {
                return  <Card key={card._id} card={card} id={card._id} link={card.link} name={card.name} likes={card.likes} onCardClick={props.onCardClick} onCardLike={handleCardLike}/>;
        })
        }

        </section>
        </main>
    )
}

export default Main;