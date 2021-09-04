import React, {Component} from "react";
import PulseService from "../../services/pulseService";
import PulseDb from "../../db/dbProcessing";

import {RenderItem} from "./processingItem";
import {RenderItems} from "./processingItems";

export default class Processing extends Component {
    state = {
        dataList: null,
        toggleList: false,
        loading: true
    };

    getTest = new PulseService(this.props.type);

    componentDidMount() {
        const group = this.props.type,
            pathToDb = PulseDb(group);

        this.getTest.getResource(pathToDb)
            .then(dataList => {
                this.setState({
                    dataList,
                    loading: false
                });
            })
            .catch(error => console.error(error));
    }

    onShowAllData = (event) => {
        event.preventDefault();
        this.setState({
            toggleList: !this.state.toggleList
        })
    }

    render() {
        const {dataList, toggleList} = this.state;

        if (!dataList) return null;

        const item = RenderItem(dataList, this.onShowAllData);
        const items = RenderItems(dataList);

        return(
            <View item={item} items={items} toggleList={toggleList}/>
        )
    }
}

const View = (props) => {
    const {item, items, toggleList} = props;

    let classesList = 'processing__subList';
    if (toggleList) classesList += ' showProcessingList';
    return(
        <>
            {item}
            <li className='processing__item'>
                <ul className={classesList}>
                    {items}
                </ul>
            </li>
        </>
    )
};