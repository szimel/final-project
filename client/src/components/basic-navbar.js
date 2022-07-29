import { Container, Navbar, } from "react-bootstrap";
import '../App.css';

const BasicNavbar = () => {
  return (
    <Navbar variant="light" expand="lg" className="color-nav">
      <Container>
        <Navbar.Brand  href="/">Categorizer</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BasicNavbar;
