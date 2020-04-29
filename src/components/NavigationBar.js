import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


class NavigationBar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="info">
                <Navbar.Brand href="#home">Quiz City</Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="https://github.com/hus-o/react-quiz-app">About</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default NavigationBar