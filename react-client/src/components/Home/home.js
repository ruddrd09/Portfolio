import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom'
import 'bulma/css/bulma.css'
 
class Home extends PureComponent {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return (
            <div className="box">
                <div className="box" onClick={() => this.props.history.push('/setDetails')}>Add a Profile</div>
                <div className="box" onClick={() => this.props.history.push('/getDetails')}>View All Profiles</div>
            </div>
        )
    }
}

export default withRouter(Home);