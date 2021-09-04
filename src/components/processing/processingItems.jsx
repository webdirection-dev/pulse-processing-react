import React from "react";

const RenderItems = (arr) => {
    return arr.reverse().map((item, index) => {
        let classForWorn = 'processing__item';
        if (+item.data === 0) classForWorn += ' warning';

        if (index !== 0) {
            return(
                <li
                    key={item.id}
                    className={classForWorn}
                >
                    <div className="processing__data">{item.time}: {item.data}</div>
                </li>
            )
        } else return null;
    })
}

export {RenderItems};