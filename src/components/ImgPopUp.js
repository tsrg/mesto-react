function ImgPopUp(props) {
    console.log(props);
    //console.log(props.card.isOpen);
    //const card = props.card;
    return (
        <section className={"popup popup_type_img-popup" + (props.card[2] ? 'popup_opened' : '')}>
        <div className="popup__container">
            <img className="popup__picture" src={props.card.link} alt="img" />
            <h2 className="popup__img-title">{props.card.name}</h2>
            <button className="popup__close-btn popup__close-btn_type_img" type="button"></button>
        </div>
        <div className="popup__overlay"></div>
        </section>
    )
}

export default ImgPopUp;