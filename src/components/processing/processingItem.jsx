import React from "react";

const RenderItem = (arr, onShowAllData) => {
    return arr.map((item, index) => {
        let classesForWorn = 'processing__item';
        if (+item.data === 0) classesForWorn += ' warning';

        if (index === arr.length-1) {
            return(
                <li
                    key={item.id}
                    className={classesForWorn}
                >
                    <h3 className='processing__name'>Товарная группа: {item.name}</h3>
                    <div className="processing__data">{item.time}: {item.data}</div>
                    <button
                        className='btn processing__btn'
                        onClick={onShowAllData}
                    >Test</button>
                </li>
            )
        } else return null;
    })
}

export {RenderItem};