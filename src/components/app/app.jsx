import React, {Component} from "react";
import Header from "../header";
import Main from "../main";
import Guide from "../guide";
import Footer from "../footer";
// import CalcScroll from "../tehnical";

export default class App extends Component {
    state = {
        refreshProcessing: false,
        classForDownProcessing: false,
        showGuide: false,
        hideGuide: true
    }

    componentDidMount() {
        // const widthScroll = CalcScroll();

        setTimeout(() => {
            this.setState({
                refreshProcessing: true
            });
        }, 2000);
    }

    onRefreshProcessing = () => {
        this.setState({
            classForDownProcessing: true
        });

        setTimeout(() => {
            this.setState({
                refreshProcessing: false,
                classForDownProcessing: false,

            });

            setTimeout(() => {
                this.setState({
                    refreshProcessing: true,
                });
            }, 1);
        }, 2000);
    };

    onShowGuide = () => {
        this.setState({
            showGuide: !this.state.showGuide,
            hideGuide: false
        });

        if (this.state.showGuide) {
            setTimeout(() => {
                this.setState({
                    hideGuide: true
                });
            }, 250);
        }
    };

    onChangeTheme = () => {
        const currentTheme = localStorage.getItem('theme');
        let colorTheme = 'light-theme';

        if (currentTheme !== 'dark-theme') colorTheme = 'dark-theme';

        localStorage.setItem('theme', colorTheme);

        this.setState({
            changeTheme: !this.state.changeTheme
        });
    };

    render() {
        const {refreshProcessing, classForDownProcessing, showGuide, hideGuide} = this.state;

        let outProcessing = null;
        if (refreshProcessing) outProcessing = <Main classForDownProcessing={classForDownProcessing}/>

        let classTheme = localStorage.getItem('theme');

        return (
            <div className={classTheme}>
                <h1 className="header__title">Скорость обработки документов</h1>
                <Header
                    showGuide={showGuide}
                    onRefreshProcessing={this.onRefreshProcessing}
                    onShowGuide={this.onShowGuide}
                    onChangeTheme={this.onChangeTheme}
                />
                <Guide showGuide={showGuide} hideGuide={hideGuide}/>
                <main className='wrapper processing-mt'>
                    {outProcessing}
                </main>
                <Footer />
            </div>

    );
    }
}