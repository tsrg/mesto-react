import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {


  return (
    <div className="page">
      <Header />
      <Main />


      <section className="popup popup_type_author">
        <form name="author-info" className="popup__form popup__form_type_author">
          <h2 className="popup__title">Редактировать профиль</h2>
          <label className="popup__field">
            <input type="text" required name="authorName" placeholder="Имя" className="popup__input popup__input_type_name" id="authorName" minlength="2" maxlength="40" />
            <span className="popup__input-warning popup__input-warning_type_authorName"></span>
          </label>
          <label className="popup__field">
            <input type="text" required name="athorDescription" placeholder="Описание" className="popup__input popup__input_type_description" minlength="2" maxlength="200" />
            <span className="popup__input-warning popup__input-warning_type_athorDescription"></span>
          </label>
          <input type="submit" className="popup__submit-btn" value="Сохранить" />
          <button className="popup__close-btn" type="button"></button>
        </form>
        <div className="popup__overlay"></div>
      </section>

      <section className="popup popup_type_add-place">
        <form name="add-place" className="popup__form popup__form_type_add-place">
          <h2 className="popup__title">Новое место</h2>
          <label className="popup__field">
            <input type="text" required name="place-name" placeholder="Название" className="popup__input popup__input_type_place-name" minlength="2" maxlength="30" />
            <span className="popup__input-warning popup__input-warning_type_place-name"></span>
          </label>
          <label className="popup__field">
            <input type="url" required name="place-photo" placeholder="Ссылка на картинку" className="popup__input popup__input_type_photo" />
            <span className="popup__input-warning popup__input-warning_type_place-photo"></span>
          </label>
          <input type="submit" className="popup__submit-btn" value="Создать" />
          <button className="popup__close-btn" type="button"></button>
        </form>
        <div className="popup__overlay"></div>
      </section>

      <section className="popup popup_type_img-popup">
        <div className="popup__container">
          <img className="popup__picture" src="<%=require('./images/avatar.jpg')%>" alt="img" />
          <h2 className="popup__img-title"></h2>
          <button className="popup__close-btn popup__close-btn_type_img" type="button"></button>
        </div>
        <div className="popup__overlay"></div>
      </section>

      <section className="popup popup_type_remove-card">
        <form name="remove-card" className="popup__form popup__form_type_remove-card">
          <h2 className="popup__title">Вы уверены?</h2>
          <input type="submit" className="popup__submit-btn" value="Да" />
          <button className="popup__close-btn" type="button"></button>
        </form>
        <div className="popup__overlay"></div>
      </section>

      <section className="popup popup_type_edit-avatar">
        <form name="edit-avatar" className="popup__form popup__form_type_edit-avatar">
          <h2 className="popup__title">Обновить аватар</h2>
          <label className="popup__field">
            <input type="url" required name="avatar" placeholder="Ссылка на картинку" className="popup__input popup__input_type_avatar" />
            <span className="popup__input-warning popup__input-warning_type_avatar"></span>
          </label>
          <input type="submit" className="popup__submit-btn" value="Сохранить" />
          <button className="popup__close-btn" type="button"></button>
        </form>
        <div className="popup__overlay"></div>
      </section>

      <template id="cards-tempalte">
        <article className="element">
          <div className="element__pic-wrapper">
            <img className="element__picture" src="img" alt="pic" />
          </div>
          <div className="element__title-container">
            <h2 className="element__title"></h2>
            <div className="element__likes">
              <button className="element__like-btn" type="button"></button>
              <span className="element__like-counter">0</span>
            </div>
          </div>
          <button className="element__remove-btn" type="button"></button>
        </article>
      </template>

      <Footer />
    </div>
  );
}

export default App;
