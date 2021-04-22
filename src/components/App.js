import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImgPopUp from './ImgPopUp';
import React, { useState } from 'react';





function App() {

  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState([]);

console.log(selectedCard);
 // let isEditProfilePopupOpen = state;
  //let isEditAvatarPopupOpen = state;
  //let isAddPlacePopupOpen = state;
  

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
  }
  function handleCardClick(card) {
    //console.log(card);
    const data = true;
    setSelectedCard([card, data]);
    console.log(selectedCard);
  }

  return (
    <div className="page">
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

      <ImgPopUp card={selectedCard} onClose="null">

      </ImgPopUp>


      <Footer />
    </div>
  );
}


export default App;
