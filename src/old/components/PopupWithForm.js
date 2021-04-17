import React, { useState } from 'react';

function PopupWithForm(props) {

    return (
            <section className={`popup popup_type_${props.name}`}>
                <form name="author-info" className={`popup__form popup__form_type_${props.name}`}>
                    <h2 className="popup__title">{props.title}</h2>
                    {props.children}
                    <button className="popup__close-btn" type="button"></button>
                </form> 
                <div className="popup__overlay"></div>
            </section>
    )
}

export default PopupWithForm;