// Library
import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import Header from "../Header";
import HeaderLight from "../HeaderLight";
import Footer from "../Footer";

class Layout extends Component {

    render() {
        console.log("PROPS", this.props);
        return (
            <>
                {this.props.light ? (
                    <HeaderLight/>
                ) : (
                    <Header/>
                )}

                <Container>
                    {this.props.children}
                </Container>
                <Footer/>
            </>
        )
    }
}

export default Layout