import React from "react";
import logoMini from "../../imgDev/logo-mini.webp"


const Footer = () => {
    return(
        <footer className='footer'>
            <div className="footer__content">
                <a href='https://confluence.crpt.ru/pages/viewpage.action?pageId=114751506' className='footer__link'>Confluence</a>
                <div className="footer__copyright">
                    <i className="fas fa-chart-line"></i>
                    <p>By DUTY</p>
                </div>
                <a href="https://честныйзнак.рф/business/pulse/" className="footer__markirovka">
                    <img src={logoMini} alt="site" className="footer__img"/>
                    <p>Пульс маркировки</p>
                </a>
            </div>
        </footer>
    )
};

export default Footer;