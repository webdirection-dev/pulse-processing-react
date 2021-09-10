import React from "react";

export default class GetElemProcessing extends React.Component {
    state = {
        processingHeadHover: true
    }

    onChangeClassHeadHover = () => {
        this.setState({
            processingHeadHover: !this.state.processingHeadHover
        });
    }

    renderForProcessing = () => {
        const {dataList, onShowAllData, list=false} = this.props;
        let classForWorn = 'processing__item';

        let classesProcessingHead = 'processing__head';
        let classesBtnsShowHide = 'btn processing__btn processing__btn-title';
        if (!this.state.processingHeadHover) {
            classesProcessingHead += ' processing__head-hover';
            classesBtnsShowHide = 'btn processing__btn processing__btn-list'
        };

        return dataList.map((item, index) => {
            if (+item.data === 0) classForWorn += ' warning';
            let out = dataList[(dataList.length-1) - index];

            if (list && index !== 0) {
                if (index !== 0) {
                    return (
                        <ViewListData
                            key={item.id}
                            item={item}
                            classForWorn={classForWorn}
                            out={out}
                        />
                    )
                }
            }

            if (index === dataList.length-1) {
                return(
                    <ViewTitleData
                        key={item.id}
                        item={item}
                        classForWorn={classForWorn}
                        classesProcessingHead={classesProcessingHead}
                        classesBtnsShowHide={classesBtnsShowHide}
                        onShowAllData={onShowAllData}
                        onChangeClassHeadHover={this.onChangeClassHeadHover}
                    />
                )
            }

            else return null;
        })
    };

    render() {
        return(
            this.renderForProcessing()
        )
    }
};

const ViewTitleData = ({item, classForWorn, onShowAllData, classesProcessingHead, onChangeClassHeadHover, classesBtnsShowHide}) => {
    let timeProcessing = item.time.split(' ')[0];


    return(
        <li
            className={classForWorn}
        >
            <div className={classesProcessingHead}>
                <h3 className='processing__name'>{timeProcessing} / <span>{item.name}</span> / {item.data}</h3>
                <button
                    className={classesBtnsShowHide}
                    onClick={() => {
                        onChangeClassHeadHover();
                        onShowAllData();
                    }}
                />
            </div>
        </li>
    )
};

const ViewListData = ({item, classForWorn, out}) => {
    let timeProcessing = out.time.split(' ')[0];

    return(
        <li
            key={item.id}
            className={classForWorn}
        >
            <div className="processing__data">{timeProcessing}: {out.data}</div>
        </li>
    )
};

// import React from "react";
//
// const GetElemProcessing = (arr, onShowAllData, list=false) => {
//     let classForWorn = 'processing__item';
//
//     return arr.map((item, index) => {
//         if (+item.data === 0) classForWorn += ' warning';
//         let out = arr[(arr.length-1) - index];
//
//         if (list && index !== 0) {
//             if (index !== 0) {
//                 return (
//                     <ViewListData
//                         key={item.id}
//                         item={item}
//                         classForWorn={classForWorn}
//                         out={out}
//                     />
//                 )
//             }
//         }
//
//         if (index === arr.length-1) {
//             return(
//                 <ViewTitleData
//                     key={item.id}
//                     item={item}
//                     classForWorn={classForWorn}
//                     onShowAllData={onShowAllData}
//                 />
//             )
//         }
//
//         else return null;
//     });
// };
//
// const ViewTitleData = ({item, classForWorn, onShowAllData}) => {
//     let timeProcessing = item.time.split(' ')[0];
//
//     return(
//         <li
//             className={classForWorn}
//         >
//             <div className="processing__head">
//                 <h3 className='processing__name'>{timeProcessing} / <span>{item.name}</span> / {item.data}</h3>
//                 <button
//                     className='btn processing__btn'
//                     onClick={onShowAllData}
//                 />
//             </div>
//         </li>
//     )
// };
//
// const ViewListData = ({item, classForWorn, out}) => {
//     let timeProcessing = out.time.split(' ')[0];
//
//     return(
//         <li
//             key={item.id}
//             className={classForWorn}
//         >
//             <div className="processing__data">{timeProcessing}: {out.data}</div>
//         </li>
//     )
// };
//
// export default GetElemProcessing;
