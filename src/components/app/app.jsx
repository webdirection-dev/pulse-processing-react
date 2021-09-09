import React, {Component} from "react";
import Header from "../header";
import Main from "../main";

export default class App extends Component {
    state = {
        refreshProcessing: false
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
            refreshProcessing: false
        });

        setTimeout(() => {
            this.setState({
                refreshProcessing: true
            });
        }, 2000);
    };

    render() {
        const {refreshProcessing} = this.state;
        let outProcessing = null;
        if (refreshProcessing) outProcessing = <Main />

        return (
            <>
                <Header onRefreshProcessing={this.onRefreshProcessing}/>
                <main className='wrapper'>
                    {outProcessing}
                </main>
            </>
        );
    }
}