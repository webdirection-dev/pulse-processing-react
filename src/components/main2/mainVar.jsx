import React from "react";
import PulseService from "../../services/pulseService";
import PulseDb from "../../db/dbProcessing";
import Spinner from "../spinner";

export default class MainVar extends React.Component {

    state = {
        dataList: null,
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

    renderItems(arr) {
        return arr.reverse().map((item, index) => {
            if (index !== 0) {
                return(
                    <li
                        key={item.id}
                        className="processing__item"
                        // onClick={this.props.onAllItems()}
                    >
                        <h3 className='processing__name'>Товарная группа: {item.name}</h3>
                        <div className="processing__data">{item.time}: {item.data}</div>
                    </li>
                )
            } else return null;
        })
    }

    render() {
        const {dataList} = this.state;

        if (!dataList) return <Spinner />

        const items = this.renderItems(dataList);

        return(
            <div className="processing">
                <Spinner />
                <h2 className='processing__title'>Processing</h2>
                <View items={items}/>
            </div>
        )
    }
}

const View = (props) => {
    const data = props.items;
    return(
        <ul className="processing__list">
            {data}
        </ul>
    )
};