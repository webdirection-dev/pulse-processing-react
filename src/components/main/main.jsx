import React from "react";
import ProcessingItem from "../processing";

export default class Main extends React.Component {
    render() {
        return(
            <div className="processing">
                <h2 className='processing__title'>Processing</h2>
                <ul className="processing__list">
                    <ProcessingItem type='milk'/>
                    <ProcessingItem type='medicine'/>
                    <ProcessingItem type='lp'/>
                    <ProcessingItem type='shoes'/>
                    <ProcessingItem type='perfume'/>
                    <ProcessingItem type='tobacco'/>
                    <ProcessingItem type='photo'/>
                    <ProcessingItem type='tires'/>
                </ul>
            </div>
        )
    }
}

// export default class Main extends React.Component {
//
//     state = {
//         dataList: null,
//         loading: true
//     };
//
//     getTest = new PulseService(this.props.type);
//
//     componentDidMount() {
//         const group = this.props.type,
//             pathToDb = PulseDb(group);
//
//         this.getTest.getResource(pathToDb)
//             .then(dataList => {
//                 this.setState({
//                     dataList,
//                     loading: false
//                 });
//             })
//             .catch(error => console.error(error));
//     }
//
//     onShowAllData = (event) => {
//         event.preventDefault();
//     }
//
//     renderItem(arr) {
//         return arr.map((item, index) => {
//             let classesForWorn = 'processing__item';
//             if (+item.data === 0) classesForWorn += ' warning';
//
//             if (index === arr.length-1) {
//                 return(
//                     <li
//                         key={item.id}
//                         className={classesForWorn}
//                     >
//                         <h3 className='processing__name'>Товарная группа: {item.name}</h3>
//                         <div className="processing__data">{item.time}: {item.data}</div>
//                         <button
//                             className='btn processing__btn'
//                             onClick={this.onShowAllData}
//                         >Test</button>
//                     </li>
//                 )
//             } else return null;
//         })
//     }
//
//     renderItems(arr) {
//         return arr.reverse().map((item, index) => {
//             let classForWorn = 'processing__item';
//             if (+item.data === 0) classForWorn += ' warning';
//
//             if (index !== 0) {
//                 return(
//                     <li
//                         key={item.id}
//                         className={classForWorn}
//                     >
//                         <h3 className='processing__name'>Товарная группа: {item.name}</h3>
//                         <div className="processing__data">{item.time}: {item.data}</div>
//                     </li>
//                 )
//             } else return null;
//         })
//     }
//
//     render() {
//         const {dataList} = this.state;
//
//         if (!dataList) return <Spinner />
//
//         const item = this.renderItem(dataList);
//         const items = this.renderItems(dataList);
//
//         return(
//             <View item={item} items={items}/>
//         )
//     }
// }
//
// const View = (props) => {
//     const {item, items} = props;
//     return(
//         <div className="processing">
//             <Spinner />
//             <h2 className='processing__title'>Processing</h2>
//             <ul className="processing__list">
//                 {item}
//                 {items}
//             </ul>
//         </div>
//     )
// };