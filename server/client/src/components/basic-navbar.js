import { useEffect } from "react";
import { Container, Nav, Navbar, } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { currentUser } from "../actions";
import '../App.css';

const BasicNavbar = () => {
  const dispatch = useDispatch();
  useEffect (() => {
    dispatch(currentUser());
    }, []);
  const authenticated = useSelector(state => state.auth.authenticated);
  const data = useSelector(state => state.currentUser);

  if (authenticated) {
    return (
      <Navbar variant="light" expand="lg" className="color-nav">
      <Container>
        <Navbar.Brand  href="/">Categorizer</Navbar.Brand>
        <Nav className='ms-auto me-2'>
          <Nav.Link>{data.email}</Nav.Link>
          <Nav.Link href='/'>Home</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    )
  } else {
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
};

export default BasicNavbar;