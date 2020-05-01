import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


const NavigationBar = () => {
    return ( 
        <div>
            <Navbar id="navbar" bg="dark" variant="dark">
            <Navbar.Brand href="/">
            <img
                alt="question mark logo"
                src="https://www.pinclipart.com/picdir/big/391-3915175_convention-networking-sponsorship-questions-icon-question-mark-square.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
            />
                {' '} Quiz City
                </Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="https://github.com/hus-o/react-quiz-app/blob/master/README.md">About</Nav.Link>
                </Nav>
            </Navbar>
        </div>
     );
}
 
export default NavigationBar;