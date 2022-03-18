import { Nav, Container, Navbar } from "react-bootstrap";
import Logo from '/workspace/react-restaurant/src/logo.png'
import './topbar.css'

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
            className="align-top mt-4"
            position="absolute"
          />
        </Navbar.Brand>
              <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#menu">Menu</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#visit">Visit</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }