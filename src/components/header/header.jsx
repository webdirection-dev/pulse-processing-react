import React, {Component} from "react";
import Spinner from "../spinner";
import Logo from "../../imgDev/logo.png"

export default class Header extends Component {
    state = {
        showSpinner: true,
        showSubTitle: false,
        mouseClick: false,
            mouseClickGuide: false
    }

    componentDidMount() {
        this.onRefresh();
    }

    onRefresh = () => {
        this.setState({
            showSpinner: true,
            showSubTitle: false
        });

        setTimeout(() => {
            this.setState({
                showSpinner: !this.state.showSpinner,
                showSubTitle: !this.state.showSubTitle
            });
        }, 2000);
    };

    onClickMouse = () => {
        this.setState({
            mouseClick: !this.state.mouseClick
        });
        setTimeout(() => {
            this.setState({
                mouseClick: !this.state.mouseClick
            });
        }, 2000);
    };

    onClickMouseGuide = () => {
        this.setState({
            mouseClickGuide: !this.state.mouseClickGuide
        });
        setTimeout(() => {
            this.setState({
                mouseClickGuide: !this.state.mouseClickGuide
            });
        }, 500);
    };

    render() {
        const {showSpinner, showSubTitle, mouseClick, mouseClickGuide} = this.state;
        const {onShowGuide, showGuide, onChangeTheme} = this.props;

        let titleGuide = 'Show';
        if (showGuide) titleGuide = 'Hide'

        let titleTheme = 'Dark';
        if (localStorage.getItem('theme') === 'dark-theme') titleTheme = 'Light'

        let spinnerClasses = '';
        if (!showSpinner) spinnerClasses += ' hidden';

        let subTitleClasses = 'header__subtitle';
        if (showSubTitle) subTitleClasses += ' show scale-up-center'

        let headerBtnClasses = 'btn header__btn';
        if (mouseClick) headerBtnClasses += ' onMouseClick';

        let guideBtnClasses = 'btn header__btn';
        if (mouseClickGuide) guideBtnClasses += ' onMouseClick';

        return(
            <header className="header">
                <div className="header__logo">
                    <img className="logo" src={Logo} alt="logo"/>
                </div>
                <div className="header__content">
                    <div className='header__spinner-content'>
                        <Spinner spinnerClasses={spinnerClasses}/>
                        <h2 className={subTitleClasses}>Processing</h2>
                    </div>
                </div>
                <div className="header__btns">
                    <button
                        className={headerBtnClasses}
                        onMouseDown={this.onClickMouse}
                        onClick={() => {
                            this.onRefresh();
                            this.props.onRefreshProcessing();
                        }}
                    >
                        Refresh
                    </button>
                    <button
                        className={guideBtnClasses}
                        onClick={onShowGuide}
                        onMouseDown={this.onClickMouseGuide}
                    >
                        {titleGuide} Guide
                    </button>
                    <button
                        className="btn header__btn header__theme"
                        onClick={onChangeTheme}
                    >
                        {titleTheme} Theme
                    </button>
                </div>
            </header>
        )
    }
};