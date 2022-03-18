import { Nav, Container, Navbar } from "react-bootstrap";
import Logo from '/workspace/react-restaurant/src/logo.png'

export default function Topbar() {
    return (
      <div>
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand href="#home">
          <img
            alt=""
            src={Logo}
            width="150"
            height="150"
            className="d-inline-block align-top"
          />{' '}
        </Navbar.Brand>
              <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#menu">Menu</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }