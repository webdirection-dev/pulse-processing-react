import React from "react";
import PulseService from "../../services/pulseService";
import PulseDb from "../../db/dbProcessing";
import Spinner from "../spinner";

export default class MainTest extends React.Component {

    state = {
        response: {name: null, time: null, data: null},
        loading: true
    };

    getTest = new PulseService(this.props.type);

    componentDidMount() {
        this.updateState();
    }

    onDataLoaded(response) {
        this.setState({
            response,
            loading: false
        });
    }

    updateState() {
        const group = this.props.type,
            pathToDb = PulseDb(group);

        this.getTest.getResource(pathToDb)
            .then(response => {
                this.onDataLoaded(response);
                // response.forEach(item => console.log(item));
                // this.setState({
                //     response
                // });
            })
            .catch(error => console.error(error));
    }

    render() {
        let responseState;

        if (this.state.response.name === null) {
            responseState = this.state.response;
        } else responseState = this.state.response[5];

        const {loading} = this.state;
        const content = loading ? <Spinner /> : <View responseState={responseState}/> ;

        return(
            <div className="processing">
                <h2 className='processing__title'>Processing</h2>
                {content}
            </div>
        )
    }
}

const View = (props) => {
    const data = props.responseState;
    return(
        <>
            <ul className="processing__list">
                <li className="processing__item">
                    <h3 className='processing__name'>Товарная группа: {data.name}</h3>
                    <div className="processing__data">{data.time}: {data.data}</div>
                </li>
            </ul>
        </>
    )
};

// const getTest = new PulseService();
// const {milk} = PulseDb();
// const arr = [];
//
// getTest.getResource(milk)
//     .then(response => {
//         response.forEach(item => {
//             arr.push(
//                 <li className="processing__item">
//                     {item.UF_LESS10MIN}
//                 </li>
//             )
//         });
//         // response.forEach(item => console.log(item.UF_LESS10MIN));
//     })
//     .catch(error => console.error(error));
//
// console.log(arr);
//
// const Main = () => {
//     return(
//         <mainTest className='wrapper'>
//             <div className="processing">
//                 <ul className="processing__list">
//                     {arr}
//                     {/*<li className="processing__item">*/}
//                     {/*    Test*/}
//                     {/*</li>*/}
//                     {/*<li className="processing__item">*/}
//                     {/*    Test*/}
//                     {/*</li>*/}
//                 </ul>
//             </div>
//         </mainTest>
//     )
// };
//
// export default Main;