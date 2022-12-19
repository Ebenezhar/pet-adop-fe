import { Controls, Player } from '@lottiefiles/react-lottie-player';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
    return (
        // <Navbar bg="light" variant="light">
        //     <Container>
        //         <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        //         <Nav className="me-auto">
        //             <Nav.Link href="#home">Home</Nav.Link>
        //             <Nav.Link href="#features">Features</Nav.Link>
        //             <Nav.Link href="#pricing">Pricing</Nav.Link>
        //         </Nav>
        //     </Container>
        // </Navbar>

        <nav className="navbar navbar-expand-lg nav-style" data-aos-once="true" data-aos="fade-down" style={{ position: "sticky" }}>
            <div className="container-fluid ">
                <Player
                    className='player'
                    background="transparent"
                    autoplay
                    loop
                    src="https://assets7.lottiefiles.com/packages/lf20_32v7KqVd8G.json"
                    style={{ height: '50px', width: '50px', background: 'transperant' }}
                >
                    <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                </Player>
                <a className="btn navbar-brand px-md-2 profile-name fw-bold" href="/">ANIMAL SHELTER</a>
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#myNavbar">
                    <i class="fas fa-bars fa-fw"></i>
                </button>
                <div className="collapse me-3 navbar-collapse nav-head d-flex justify-content-center" id="navbarSupportedContent">
                    <ul className="navbar-nav d-flex justify-content-center mb-lg-0 " >
                        <li className="nav-item ">
                            <a className="nav-link nav-text fw-bold" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-text fw-bold" href="#" >Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar