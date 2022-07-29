import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { currentUser } from '../actions';

const VideoToCategory = () => {
  const dispatch = useDispatch();

  const [show, setShow] = useState (false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    dispatch(currentUser());
    }, []);
  
  //category dropdown
  const data = useSelector(state => state.currentUser);
  let categories = [];
  let Data = data.categories;
  const renderCategories = () => {
    if(Data === [] || Data === undefined) {
      return (
          <p>No categories to add to!</p>
      ) 
    } else {
      for (let i = 0; i < Data.length; i++) {
        categories.push(
            <Link to={'/'}>{Data[i].name}</Link>
        );
      };
      return categories;
    };
  };

  return(
    <>
      <Button type='button' variant="btn btn-outline-secondary" onClick={handleShow}>
        Add
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Select a category to add to:</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <Container>
            <Row xs={18} md={12}>
              {renderCategories()}
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default VideoToCategory;
