import React, {Component} from "react";
import Header from "../header";
import Main from "../main";
import Footer from "../footer";

export default class App extends Component {
    state = {
        refreshProcessing: false,
        classForDownProcessing: false
    }

    componentDidMount() {
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

    render() {
        const {refreshProcessing, classForDownProcessing} = this.state;
        let outProcessing = null;

        if (refreshProcessing) outProcessing = <Main classForDownProcessing={classForDownProcessing}/>

        return (
            <>
                <Header onRefreshProcessing={this.onRefreshProcessing}/>
                <main className='wrapper processing-mt'>
                    {outProcessing}
                </main>
                <Footer />
            </>
        );
    }
}