import React, { useState } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup(props) {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const currentUser = React.useContext(CurrentUserContext);

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser, props.isOpen]);

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleDescriptionChange(e) {
        setDescription(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateUser({name, about: description});
    }

    return (
    <PopupWithForm name="author" title="Редактировать профиль" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
            <label className="popup__field">
                <input value={name || ''} onChange={handleNameChange} type="text" required name="authorName" placeholder="Имя" className="popup__input popup__input_type_name" id="authorName" minLength="2" maxLength="40" />
                <span className="popup__input-warning popup__input-warning_type_authorName"></span>
            </label>
            <label className="popup__field">
                <input value={description || ''} onChange={handleDescriptionChange} type="text" required name="athorDescription" placeholder="Описание" className="popup__input popup__input_type_description" minLength="2" maxLength="200" />
                <span className="popup__input-warning popup__input-warning_type_athorDescription"></span>
            </label>
            <input type="submit" className="popup__submit-btn" value="Сохранить" />
    </PopupWithForm> )
}

export default EditProfilePopup;