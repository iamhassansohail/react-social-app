// Library
import React, {Component} from 'react';
import {Link} from "react-router-dom";
// Constants
import {Routing, Colors} from "../../Utils/CommonContants";

class AboutUs extends Component {
    render() {
        return (
            <div style={{background:Colors.DANGER}}>
                Hello from About

                <Link to={Routing.HOME.link}>Home</Link>
            </div>
        )
    }
}
export default AboutUs