import React, { useRef } from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {

    const avatarRef = useRef();

    function handleSubmit(e) {
        e.preventDefault();

        props.onUpdateAvatar({
            avatar: avatarRef.current.value,
        });
    }

    return (
        <PopupWithForm name="edit-avatar" title="Обновить аватар" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit} >
            <label className="popup__field">
                <input ref={avatarRef} type="url" required name="avatar" placeholder="Ссылка на картинку" className="popup__input popup__input_type_avatar" />
                <span className="popup__input-warning popup__input-warning_type_avatar"></span>
            </label>
            <input type="submit" className="popup__submit-btn" value="Сохранить" />
        </PopupWithForm>
    )
}

export default EditAvatarPopup;