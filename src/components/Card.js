import React from 'react';
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {

    const currentUser = React.useContext(CurrentUserContext);
    const isOwn = props.card.owner._id === currentUser._id;
    const cardDeleteButtonClassName = (
        `element__remove-btn ${isOwn ? 'element__remove-btn_visible' : 'element__remove-btn_hidden'}`
        );
    const isLiked = props.card.likes.some(i => i._id === currentUser._id);
    const cardLikeButtonClassName = (
        `element__like-btn ${isLiked ? 'element__like-btn_active' : 'element__like-btn_inactive'}`
        );

    function handleClick() {
        props.onCardClick(props.card);
    }

    function handleLikeClick() {
        props.onCardLike(props.card);
    }

    function handleDeleteClick () {
        props.onCardDelete(props.card);
    }

    return (
        <article id={props.id} className="element">
            <div className="element__pic-wrapper" onClick={handleClick}>
                <img className="element__picture" src={props.link} alt="pic" />
            </div>
            <div className="element__title-container">
                <h2 className="element__title">{props.name}</h2>
                <div className="element__likes">
                    <button className={cardLikeButtonClassName} type="button" onClick={handleLikeClick}></button>
                    <span className="element__like-counter">{props.likes.length}</span>
                </div>
            </div>
            <button className={cardDeleteButtonClassName} type="button" onClick={handleDeleteClick}></button>
        </article>)
}
export default Card;