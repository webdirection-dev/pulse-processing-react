import React from "react";

const Header = () => {
    return(
        <header className="logo">
            <img className="logo__img" src="img/logo.png" alt="logo"/>
            <h1 className="logo__title">Скорость обработки документов</h1>
            <div className="logo__block"></div>
        </header>
    )
};

export default Header;