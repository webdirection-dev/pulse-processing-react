import React from "react";
import Processing from "../processing";

export default class Main extends React.Component {
    state = {
        refresh: true
    }

    render() {
        let animation = 'processing';
        if (this.props.classForDownProcessing) animation += ' scale-down-ver-top'

        if (this.state.refresh) {
            return <ViewProcessing animation={animation}/>
        } else return null
    }
}

const ViewProcessing = (props) => {
    const {animation} = props;
    return(
        <div className={animation}>
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