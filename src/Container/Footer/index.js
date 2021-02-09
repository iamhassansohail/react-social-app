// Library
import React from 'react';
import {Row,Col} from "react-bootstrap";

const Footer = (props) => {
    return (
        <>
            <Row className={"mt-5"} >
                <Col className={"bg-secondary"} style={{height:"50px"}}>
                    <span className={"text-light"}>&copy; Hassan Sohail 2021 - All rights reserved</span>
                </Col>
            </Row>
        </>
    )
}

export default Footer;