
function PopupWithForm(props) {

    return (
            <section className={`popup popup_type_${props.name} ` + (props.isOpen ? 'popup_opened' : '')}>
                <form name="author-info" className={`popup__form popup__form_type_${props.name}`} onSubmit={props.onSubmit}>
                    <h2 className="popup__title">{props.title}</h2>
                    {props.children}
                    <button className="popup__close-btn" type="button" onClick={props.onClose}></button>
                </form>
                <div className="popup__overlay"></div>
            </section>
    )
}

export default PopupWithForm;