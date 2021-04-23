function Card(props) {

    function handleClick() {
        props.onCardClick(props.card);
    }

    return (
        <article id={props.id} className="element">
            <div className="element__pic-wrapper" onClick={handleClick}>
                <img className="element__picture" src={props.link} alt="pic" />
            </div>
            <div className="element__title-container">
                <h2 className="element__title">{props.name}</h2>
                <div className="element__likes">
                    <button className="element__like-btn" type="button"></button>
                    <span className="element__like-counter">{props.likes.length}</span>
                </div>
            </div>
            <button className="element__remove-btn" type="button"></button>
        </article>)
}
export default Card;