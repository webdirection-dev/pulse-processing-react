import React from "react";
import Spinner from "../spinner";
import Logo from "../../imgDev/logo.png"

const Header = () => {
    return(
        <header className="logo">
            <img className="logo__img" src={Logo} alt="logo"/>
            <div className="header__title">
                <h1 className="logo__title">Скорость обработки документов</h1>
                <Spinner />
            </div>
            <div className="logo__block"></div>
        </header>
    )
};

export default Header;