function Card(props) {

    function handleClick() {
        props.onCardClick(props.card);
      }

    return (
        <article id={props.id} class="element">
            <div class="element__pic-wrapper" onClick={handleClick}>
                <img class="element__picture" src={props.link} alt="pic" />
            </div>
            <div class="element__title-container">
                <h2 class="element__title">{props.name}</h2>
                <div class="element__likes">
                    <button class="element__like-btn" type="button"></button>
                    <span class="element__like-counter">{props.likes.length}</span>
                </div>
            </div>
            <button class="element__remove-btn" type="button"></button>
        </article>)
}
export default Card;