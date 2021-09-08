import React, {Component} from "react";
import './spinner.css';

export default class Spinner extends Component {

    render() {
        let classesSpinner = 'loadingio-spinner-pulse-2903fcitd9f' + this.props.spinnerClasses;

        return(
            <div className={classesSpinner}>
                <div className="ldio-mf2s7y42989">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        )
    }
};