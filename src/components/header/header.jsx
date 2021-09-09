import React, {Component} from "react";
import Spinner from "../spinner";
import Logo from "../../imgDev/logo.png"

export default class Header extends Component {
    state = {
        showSpinner: true,
        showSubTitle: false,
        mouseClick: false
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

    render() {
        const {showSpinner, showSubTitle, mouseClick} = this.state;

        let spinnerClasses = '';
        if (!showSpinner) spinnerClasses += ' hidden';

        let subTitleClasses = 'header__subtitle';
        if (showSubTitle) subTitleClasses += ' show'

        let headerBtnClasses = 'btn header__btn header__refresh';
        if (mouseClick) headerBtnClasses += ' onMouseClick';

        return(
            <header className="header">
                <div className="header__logo">
                    <img className="logo" src={Logo} alt="logo"/>
                </div>
                <div className="header__content">
                    <h1 className="header__title">Скорость обработки документов</h1>
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
                    <button className="btn header__btn header__guide">
                        Guide
                    </button>
                    <button className="btn header__btn header__theme">
                        Dark Theme
                    </button>
                </div>
            </header>
        )
    }
};