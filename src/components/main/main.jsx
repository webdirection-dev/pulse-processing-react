import React from "react";
import Processing from "../processing";

export default class Main extends React.Component {
    render() {
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
    }
}