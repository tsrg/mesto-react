
function Main(props) {

    return (
        <main>
        <section className="profile">
            <div className="profile__avatar-container">
            <img className="profile__avatar" src="<%=require('./images/avatar.jpg')%>" alt="Аватар" />
            <button className="profile__avatar-edit" onClick={props.onEditProfile}></button>
            </div>
            <div className="profile__info">
                <h1 className="profile__title">Жак-Ив Кусто</h1>
                <button className="profile__edit-button" type="button" onClick={props.onEditAvatar}></button>
                <p className="profile__subtitle">Исследователь океана</p>
            </div>
            <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
        </section>
        <section className="elements"></section>
        </main>
    )
}

export default Main;