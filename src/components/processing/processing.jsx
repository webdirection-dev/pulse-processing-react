import React, {Component} from "react";
import PulseService from "../../services/pulseService";

import ProcessingData from "./processingData";

export default class Processing extends Component {
    state = {
        toggleList: false,
        toggleListWrapper: false,
        reverse: false
    };

    getTest = new PulseService(this.props.type);

    onShowAllData = () => {
        const {toggleList, reverse} = this.state;

        if (toggleList) {
            this.setState({
                toggleListWrapper: true,
            })

            setTimeout(() => {
                this.setState({
                    toggleList: false
                })
            }, 400);
        }

        else {
            this.setState({
                toggleList: true,
                toggleListWrapper: false,
                reverse: !reverse
            })
        }
    }

    render() {
        const {type} = this.props;
        const {toggleList, toggleListWrapper, reverse} = this.state;


        return(
            <View
                type={type}
                toggleList={toggleList}
                toggleListWrapper={toggleListWrapper}
                reverse={reverse}
                onShowAllData={this.onShowAllData}
            />
        )
    }
}

const View = (props) => {
    const {type, toggleList, toggleListWrapper, onShowAllData, reverse} = props;

    // Mount classes
    let classesList = 'processing__subList';
    if (toggleList) classesList += ' show processing__subList-bg scale-up-ver-top';

    let classProcessingItem = 'processing__item'
    if (toggleListWrapper) classProcessingItem += ' scale-down-ver-top';
    if (!toggleListWrapper) classProcessingItem += ' scale-up-ver-top';

    return(
        <>
            <ProcessingData type={type} onShowAllData={onShowAllData}/>
            <li className={classProcessingItem}>
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