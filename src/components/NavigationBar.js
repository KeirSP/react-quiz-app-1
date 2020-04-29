import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


class NavigationBar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="info">
                    <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default NavigationBar