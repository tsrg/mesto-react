import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import api from '../utils/api';
import React, { useEffect, useState } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

    function handleEditAvatarClick() {
      setIsEditAvatarPopupOpen(true);
    }
    function handleEditProfileClick() {
      setEditProfilePopupOpen(true);
    }
    function handleAddPlaceClick() {
      setAddPlacePopupOpen(true);
    }
    function closeAllPopups() {
      setIsEditAvatarPopupOpen(false);
      setEditProfilePopupOpen(false);
      setAddPlacePopupOpen(false);
      setSelectedCard(null);
    }
    function handleCardClick(card) {
      const data = {};
      data.link = card.link;
      data.name = card.name;
      data.isOpen = true;
      setSelectedCard(data);
      //setSelectedCard(card);
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

    function handleUpdateUser(e) {
      api.sendUserInfo(e)
      .then((userInfo) => {
        setCurrentUser(userInfo);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`Ошибка загрузки данных: ${err}`);
    });
    }

    function handleUpdateAvatar(e) {
      api.updateAvatar(e)
      .then((userInfo) => {
        setCurrentUser(userInfo);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      })
    }

    function handleCardLike(card) {
      const isLiked = card.likes.some(i => i._id === currentUser._id);

      api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
          setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch((err) => {console.log(`Ошибка загрузки данных: ${err}`)});
    }

  function handleCardDelete(card) {
      api.removeCard(card._id)
      .then(() => {
          setCards((cards) => {return cards.filter(item => !(item._id === card._id))});
      })
      .catch((err) => {
          console.log(`Ошибка удаления каточки:: ${err}`);
      });
  }

  function handleAddPlaceSubmit(newCard) {
    api.addNewCard(newCard)
    .then((newCard) => {
      setCards([newCard, ...cards]);
      closeAllPopups();
    })
    .catch((err) => {
      console.log(`Ошибка добавления карточки: ${err}`);
    })
  }

  useEffect(() => {
      api.getCards()
      .then((gCards) => {
          setCards(gCards);
      })
      .catch((err) => {
          console.log(`Ошибка загрузки данных: ${err}`);
      });
  }, [])

    return (
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} 
              onCardClick={handleCardClick} cards={cards} onCardLike={handleCardLike} onCardDelete={handleCardDelete} />

        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddCard={handleAddPlaceSubmit}/>

        <PopupWithForm name="remove-card" title="Вы уверены?">
          <input type="submit" className="popup__submit-btn" value="Да" />
        </PopupWithForm>

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />

        <Footer />
      </CurrentUserContext.Provider>
    );
}


export default App;
