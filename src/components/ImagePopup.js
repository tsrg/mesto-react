function ImagePopup(props) {
    if (props.card !== null) {
    return (
        <section className={`popup popup_type_img-popup ${props.card.isOpen && 'popup_opened'}`}>
        <div className="popup__container">
            <img className="popup__picture" src={props.card.link} alt="img" />
            <h2 className="popup__img-title">{props.card.name}</h2>
            <button className="popup__close-btn popup__close-btn_type_img" type="button" onClick={props.onClose}></button>
        </div>
        <div className="popup__overlay"></div>
        </section>
    )
    }
    else {
        return (
            <section className="popup popup_type_img-popup"></section>
        )
    }
}

export default ImagePopup;