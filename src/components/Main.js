import React, { useState, useEffect } from 'react';
import api from '../utils/Api';
import Card from '../components/Card';

function Main(props) {
    //let userName = 'test';
    const [userName, setUserName] = useState('Имя');
    const [userDescription, setUserDescription] = useState('Описание');
    const [userAvatar, setUserAvatar] = useState('');
    const [cards, addCards] = useState([]);

    useEffect(() => {
        Promise.all([
            api.getUserInfo(),
            api.getCards(),
        ])
        .then(([userInfo, gCards]) => {
            setUserName(userInfo.name);
            setUserDescription(userInfo.about);
            setUserAvatar(userInfo.avatar);

            addCards(gCards);
        })
        .catch((err) => {
            console.log(`Ошибка загрузки данных: ${err}`);
        })
        //.finally(() => {renderCards(cards)})
        ;
        /*
        api.getUserInfo()
            .then ((userInfo) => {
                setUserName(userInfo.name);
                setUserDescription(userInfo.about);
                setUserAvatar(userInfo.avatar);
            })
            .catch((err) => {
                console.log(`Загрузка информации о пользователе. Ошибка: ${err}`);
        });
        api.getCards()
            .then((data) => {
                addCards(...cards, ...data);
                console.log(data);
                console.log(cards);
            })*/
    }, [])
    return (
        <main>
        <section className="profile">
            <div className="profile__avatar-container">
            <img className="profile__avatar" src={userAvatar} alt="Аватар" />
            <button className="profile__avatar-edit" onClick={props.onEditProfile}></button>
            </div>
            <div className="profile__info">
                <h1 className="profile__title">{userName}</h1>
                <button className="profile__edit-button" type="button" onClick={props.onEditAvatar}></button>
                <p className="profile__subtitle">{userDescription}</p>
            </div>
            <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
        </section>
        <section className="elements">
            {
            cards.map(card => {
                return  <Card key={card._id} card={card} id={card._id} link={card.link} name={card.name} likes={card.likes} onCardClick={props.onCardClick}/>;
        })
        }

        </section>
        </main>
    )
}

export default Main;