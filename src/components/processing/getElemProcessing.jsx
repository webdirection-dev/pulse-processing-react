import React from "react";

const GetElemProcessing = (arr, onShowAllData, list=false) => {
    let classForWorn = 'processing__item';

    return arr.map((item, index) => {
        if (+item.data === 0) classForWorn += ' warning';
        let out = arr[(arr.length-1) - index];

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

        if (index === arr.length-1) {
            return(
                <ViewTitleData
                    key={item.id}
                    item={item}
                    classForWorn={classForWorn}
                    onShowAllData={onShowAllData}
                />
            )
        }

        else return null;
    });
};

const ViewTitleData = ({item, classForWorn, onShowAllData}) => {
    return(
        <li
            className={classForWorn}
        >
            <h3 className='processing__name'>Товарная группа: {item.name}</h3>
            <div className="processing__data">{item.time}: {item.data}</div>
            <button
                className='btn processing__btn'
                onClick={onShowAllData}
            >Test</button>
        </li>
    )
};

const ViewListData = ({item, classForWorn, out}) => {
    return(
        <li
            key={item.id}
            className={classForWorn}
        >
            <div className="processing__data">{out.time}: {out.data}</div>
        </li>
    )
};

export default GetElemProcessing;
