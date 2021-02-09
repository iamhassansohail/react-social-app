// Library
import React, {Component} from 'react';
import {Nav, Navbar, FormControl, Button, Form} from 'react-bootstrap';
// Constants
import {Routing} from "../../Utils/CommonContants";

class Header extends Component {
    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href={Routing.HOME.link}>Home</Nav.Link>
                        <Nav.Link href={Routing.ABOUT.link}>Who We Are</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar>
            </>
        )
    }
}

export default Header