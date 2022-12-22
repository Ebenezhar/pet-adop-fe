import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

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

        // <nav className="navbar navbar-expand-lg nav-style" data-aos-once="true" data-aos="fade-down" style={{ position: "sticky" }}>
        //     <div className="container-fluid ">
        //         {/* <Player
        //             className='player'
        //             background="transparent"
        //             autoplay
        //             loop
        //             src="https://assets7.lottiefiles.com/packages/lf20_32v7KqVd8G.json"
        //             style={{ height: '50px', width: '50px', background: 'transperant' }}
        //         >
        //             <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
        //         </Player> */}
        //         <a className="btn navbar-brand px-md-2 profile-name fw-bold" href="/">ANIMAL SHELTER</a>
        //         <button class="navbar-toggler custom-toggler" type="button" dat-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //             <span class="navbar-toggler-icon"></span>
        //         </button>

        //         <div className="collapse me-3 navbar-collapse nav-head d-flex justify-content-center" id="navbarSupportedContent">
        //             <ul className="navbar-nav d-flex justify-content-center mb-lg-0 " >
        //                 <li className="nav-item ">
        //                     <a className="nav-link nav-text fw-bold" href="#">Home</a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link nav-text fw-bold" href="#" >Contact Us</a>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>
    )
}

export default NavBar