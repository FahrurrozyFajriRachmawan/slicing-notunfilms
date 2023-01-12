import { Container, Navbar, Nav } from "react-bootstrap";
import "../navigationbar/NavigationBar.scss";

const NavigationBar = () => {
  return (
    <>
      <Navbar bg="transparent" expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#home">
            Notun<span>films.</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#trending">Trending</Nav.Link>
              <Nav.Link href="#lastwatched">Last Watched</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
