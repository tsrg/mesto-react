import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/Api';
import React, { useEffect, useState } from 'react';
import { CurrentUserContext } from '../components/CurrentUserContext.js';

function App() {

  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState([]);

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }
  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard(null);
  }
  function handleCardClick(card) {
    const data = [];
    data.link = card.link;
    data.name = card.name;
    data.isOpen = true;
    setSelectedCard(data);
  }

  useEffect(() => {
    api.getUserInfo()
    .then((userInfo) => {
      setCurrentUser(userInfo);
    })
    .catch((err) => {
      console.log(`Ошибка загрузки данных: ${err}`);
  });
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/>

      <PopupWithForm name="author" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <label className="popup__field">
          <input type="text" required name="authorName" placeholder="Имя" className="popup__input popup__input_type_name" id="authorName" minLength="2" maxLength="40" />
          <span className="popup__input-warning popup__input-warning_type_authorName"></span>
        </label>
        <label className="popup__field">
          <input type="text" required name="athorDescription" placeholder="Описание" className="popup__input popup__input_type_description" minLength="2" maxLength="200" />
          <span className="popup__input-warning popup__input-warning_type_athorDescription"></span>
        </label>
        <input type="submit" className="popup__submit-btn" value="Сохранить" />
      </PopupWithForm>

      <PopupWithForm name="edit-avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <label className="popup__field">
          <input type="url" required name="avatar" placeholder="Ссылка на картинку" className="popup__input popup__input_type_avatar" />
          <span className="popup__input-warning popup__input-warning_type_avatar"></span>
        </label>
        <input type="submit" className="popup__submit-btn" value="Сохранить" />
      </PopupWithForm>

      <PopupWithForm name="add-place" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <label className="popup__field">
          <input type="text" required name="place-name" placeholder="Название" className="popup__input popup__input_type_place-name" minLength="2" maxLength="30" />
          <span className="popup__input-warning popup__input-warning_type_place-name"></span>
        </label>
        <label className="popup__field">
          <input type="url" required name="place-photo" placeholder="Ссылка на картинку" className="popup__input popup__input_type_photo" />
          <span className="popup__input-warning popup__input-warning_type_place-photo"></span>
        </label>
        <input type="submit" className="popup__submit-btn" value="Создать" />
      </PopupWithForm>

      <PopupWithForm name="remove-card" title="Вы уверены?">
        <input type="submit" className="popup__submit-btn" value="Да" />
      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />

      <Footer />
    </CurrentUserContext.Provider>
  );
}


export default App;
