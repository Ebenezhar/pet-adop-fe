import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "#131313", color: "black" }} variant="dark">
            <Container>
                <Navbar.Brand href="#home">ANIMAL SHELTER</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="/" ><u>Home</u></Nav.Link>
                        <Nav.Link href="/contactus"><u>Contact Us</u></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default NavBar