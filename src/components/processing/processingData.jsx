import React, {Component} from "react";
import PulseDb from "../../db/dbProcessing";
import PulseService from "../../services/pulseService";

import GetElemProcessing from "./getElemProcessing";

export default class ProcessingData extends Component {

    state = {
        dataList: null
    }

    getDate = new PulseService(this.props.type);

    componentDidMount() {
        const group = this.props.type,
            pathToDb = PulseDb(group);

        this.getDate.getResource(pathToDb)
            .then(dataList => {
                this.setState({
                    dataList
                });
            })
            .catch(error => console.error(error));
    }

    render() {
        const {dataList} = this.state;
        const {onShowAllData, list} = this.props;

        if (!dataList) return null;

        const item = <GetElemProcessing dataList={dataList} onShowAllData={onShowAllData} list={list}/>;
        // const item = GetElemProcessing(dataList, onShowAllData, list);

        return(
            <>
                {item}
            </>
        )
    }
}