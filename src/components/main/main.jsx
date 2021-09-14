import React from "react";
import Processing from "../processing";

export default class Main extends React.Component {
    state = {
        refresh: true
    }

    render() {
        let classProcessing = 'processing';
        if (this.props.classForDownProcessing) classProcessing += ' scale-down-ver-top'

        if (this.state.refresh) {
            return (
                <ViewProcessing classProcessing={classProcessing}/>
            )
        } else return null
    }
}

const ViewProcessing = (props) => {
    const {classProcessing} = props;
    return(
        <div className={classProcessing}>
            <ul className="processing__list">
                <Processing type='milk'/>
                <Processing type='medicine'/>
                <Processing type='lp'/>
                <Processing type='shoes'/>
                <Processing type='perfume'/>
                <Processing type='tobacco'/>
                <Processing type='photo'/>
                <Processing type='tires'/>
            </ul>
        </div>
    )
};