import { Navbar, Container, Nav } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand href="/">MILZHAFILMS</Navbar.Brand>
          <Nav>
            <Nav.Link href="#trending">TRENDING</Nav.Link>
            <Nav.Link href="#avengers">AVENGERS</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
