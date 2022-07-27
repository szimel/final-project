import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Search from './search';
import { signout } from '../actions';

const Header = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const authenticated = useSelector(state => state.auth.authenticated);
  const email = useSelector(state => state.auth.email);
  const watchListCount = useSelector(state => state.watchListCount);

  const handleSignOutClick = () => {
    dispatch(signout(() => {
      history.push('/');
    }));
  };

  if (authenticated) {
    return (
      <Navbar bg='light' expand='lg'>
      <Container>
        <Navbar.Brand href="/">Categorizer</Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link href="category">New Category</Nav.Link>
          <NavDropdown title="My Categories" >
            <NavDropdown.Item href='something'>something</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav className='ms-auto me-2'>
          <Search />
          <Nav.Link href='/' onClick={handleSignOutClick}>Sign Out</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    )
  } else {
    return (
      <Navbar bg='light' expand='lg'>
        <Container >
          <Navbar.Brand href="/">Categorizer</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href="signup">Sign Up</Nav.Link>
            <Nav.Link href="signin">Sign In</Nav.Link>
          </Nav>
          <Nav className='ms-auto me-2'>
            <Search />
          </Nav>
        </Container>
      </Navbar> 
    )
  }
}

<Navbar bg='light' expand='lg'>
<Container fluid>
  <Navbar.Brand href="/">Categorizer</Navbar.Brand>
  <Nav className='me-auto'>
    <Nav.Link href="signup">Sign Up</Nav.Link>
    <Nav.Link href="signin">Sign In</Nav.Link>
  </Nav>
  <Nav className='ms-auto me-2'>
    <Search />
  </Nav>
</Container>
</Navbar> 

export default Header;