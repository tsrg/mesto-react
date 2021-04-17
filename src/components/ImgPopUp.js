function ImgPopUp() {
    return (
        <section className="popup popup_type_img-popup">
        <div className="popup__container">
            <img className="popup__picture" src="<%=require('./images/avatar.jpg')%>" alt="img" />
            <h2 className="popup__img-title"></h2>
            <button className="popup__close-btn popup__close-btn_type_img" type="button"></button>
        </div>
        <div className="popup__overlay"></div>
        </section>
    )
}

export default ImgPopUp;