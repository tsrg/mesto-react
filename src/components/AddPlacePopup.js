import PopupWithForm from './PopupWithForm';
import React, { useState } from 'react';

function AddPlacePopup(props) {
    const [title, setTitle] = useState('');
    const [img, setImg] = useState('');

    function handleTitleChange(e) {
        setTitle(e.target.value);
    }

    function handleImgChange(e) {
        setImg(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onAddCard({name:title, link:img});
    }

    return (
        <PopupWithForm name="add-place" title="Новое место" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
            <label className="popup__field">
                <input onChange={handleTitleChange} type="text" required name="place-name" placeholder="Название" className="popup__input popup__input_type_place-name" minLength="2" maxLength="30" />
                <span className="popup__input-warning popup__input-warning_type_place-name"></span>
            </label>
            <label className="popup__field">
                <input onChange={handleImgChange} type="url" required name="place-photo" placeholder="Ссылка на картинку" className="popup__input popup__input_type_photo" />
                <span className="popup__input-warning popup__input-warning_type_place-photo"></span>
            </label>
            <input type="submit" className="popup__submit-btn" value="Создать" />
        </PopupWithForm>
    )
}

export default AddPlacePopup;