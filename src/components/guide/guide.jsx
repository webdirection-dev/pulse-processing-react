import React, {Component} from "react";

export default class Guide extends Component {
    // state = {
    //     hideGuideThis: this.props.hideGuide
    // }

    render() {
        const {showGuide, hideGuide} = this.props;

        let classGuide = '';
        if (!showGuide && hideGuide) classGuide = 'guide__content'
        if (showGuide) classGuide = 'slide-bottom';
        if (!showGuide) classGuide = 'slide-top';

        if (hideGuide) classGuide = 'hidden';


        return(
            <section className={classGuide}>
                <h2 className='guide__title'>Инструкция по проверке Пульса маркировки</h2>
                    <p className='guide__txt'>
                        Ежебуднично в 8 утра проверяем наличие обновлённых статистических данных на сайте Честный знак в разделе <a href='https://честныйзнак.рф/business/pulse/'>Пульс маркировки</a>.
                        <br/>
                        <br/>
                        По Лекарствам данные должны быть за прошлый день, по другим ТГ - за сегодняшний день.
                    </p>
            </section>
        )
    }
}