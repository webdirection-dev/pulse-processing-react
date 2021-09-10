import React, {Component} from "react";
import PulseService from "../../services/pulseService";

import ProcessingData from "./processingData";

export default class Processing extends Component {
    state = {
        toggleList: false,
        reverse: false
    };

    getTest = new PulseService(this.props.type);

    onShowAllData = () => {
        this.setState({
            toggleList: !this.state.toggleList,
            reverse: !this.state.reverse
        })
    }

    render() {
        const {type} = this.props;
        const {toggleList, reverse} = this.state;


        return(
            <View
                type={type}
                toggleList={toggleList}
                reverse={reverse}
                onShowAllData={this.onShowAllData}
            />
        )
    }
}

const View = (props) => {
    const {type, toggleList, onShowAllData, reverse} = props;

    let classesList = 'processing__subList';
    if (toggleList) classesList += ' show scale-up-ver-top processing__subList-bg';
    return(
        <>
            <ProcessingData type={type} onShowAllData={onShowAllData}/>
            <li className='processing__item'>
                <ul className={classesList}>
                    <ProcessingData
                        type={type}
                        reverse={reverse}
                        list={true}
                    />
                </ul>
            </li>
        </>
    )
};