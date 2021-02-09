// Library
import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Col, Row} from "react-bootstrap";
import Layout from "../../Container/Layout";
// Constants
import {Routing, Colors} from "../../Utils/CommonContants";

class AboutUs extends Component {
    render() {
        return (
            <>
                <Layout light>
                    <Row>
                        <Col>
                            <div style={{background: Colors.DANGER}}>
                                Hello from About

                                <Link to={Routing.HOME.link}>Home</Link>
                            </div>
                        </Col>
                    </Row>
                </Layout>
            </>
        )
    }
}

export default AboutUs