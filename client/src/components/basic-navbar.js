import { Container, Navbar, } from "react-bootstrap"

const BasicNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" >
      <Container>
        <Navbar.Brand  href="/">Categorizer</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
};

export default BasicNavbar;
