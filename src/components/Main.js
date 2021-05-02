import React from 'react';
import Card from '../components/Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {
    const currentUser = React.useContext(CurrentUserContext);

    return (
        <main>
        <section className="profile">
            <div className="profile__avatar-container">
            <img className="profile__avatar"  src={currentUser.avatar} alt="Аватар" />
            <button className="profile__avatar-edit" onClick={props.onEditAvatar}></button>
            </div>
            <div className="profile__info">
                <h1 className="profile__title">{currentUser.name}</h1>
                <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
                <p className="profile__subtitle">{currentUser.about}</p>
            </div>
            <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
        </section>
        <section className="elements">
            { (props.cards.length > 0) &&
            (props.cards.map(card => {
                return  <Card key={card._id} card={card} id={card._id} link={card.link} name={card.name}
                                likes={card.likes} onCardClick={props.onCardClick} onCardLike={props.onCardLike}
                                onCardDelete={props.onCardDelete} />;
        }))
    }

        </section>
        </main>
    )
}

export default Main;