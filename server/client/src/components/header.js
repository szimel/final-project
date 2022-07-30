import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Search from './search';
import { signout } from '../actions';
import { currentUser, findSpecificCategory } from '../actions';
import '../App.css';


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authenticated = useSelector(state => state.auth.authenticated);

  useEffect (() => {
  dispatch(currentUser());
  }, []);

  const handleSignOutClick = () => {
    dispatch(signout(() => {
      navigate.push('/');
    }));
  };

  const categoryClick = (id) => {
    dispatch(findSpecificCategory(id, () => {
      navigate('category', { replace: true });
    }));
  }

  //category dropdown
  const data = useSelector(state => state.currentUser);
  let categories = [];
  let Data = data.categories;
  const renderCategories = () => {
    if(Data === [] || Data === undefined) {
      return (
          <NavDropdown.Item>No Categories!</NavDropdown.Item>
      );
    } else if (Data.length === 0){
      return (
        <NavDropdown.Item>No Categories!</NavDropdown.Item>
      );
    } else {
      for (let i = 0; i < Data.length; i++) {
        categories.push(
            <NavDropdown.Item key={[i]} onClick={() => 
            categoryClick(i)}>{Data[i].name}</NavDropdown.Item>
        );
      };
      return categories;
    };
  };

  if (authenticated) {
    return (
      <Navbar variant='light' expand='lg' className='color-nav'>
      <Container>
        <Navbar.Brand href="/">Categorizer</Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link href="new-category">New Category</Nav.Link>
          <NavDropdown title="My Categories">{renderCategories()}</NavDropdown>
        </Nav>
        <Nav className='ms-auto me-2'>
          <Search />
          <Nav.Link>{data.email}</Nav.Link>
          <Nav.Link href='/' onClick={handleSignOutClick}>Sign Out</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    );
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
          </Nav>
        </Container>
      </Navbar> 
    );
  };
};

export default Header;