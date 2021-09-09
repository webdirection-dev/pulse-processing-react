import React from "react";
import Processing from "../processing";

export default class Main extends React.Component {
    state = {
        refresh: true
    }

    // refreshProcessing = () => {
    //     this.setState({
    //         refresh: false
    //     });
    //
    //     setTimeout(() => {
    //         this.setState({
    //             refresh: true
    //         });
    //     }, 2000);
    // };

    render() {
        if (this.state.refresh) {
            return <ViewProcessing />
        } else return null
    }
}

const ViewProcessing = () => {
    return(
        <div className="processing">
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