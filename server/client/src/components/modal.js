import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCategory, currentUser } from '../actions';

const VideoToCategory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [show, setShow] = useState (false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const videoId = useSelector(state => state.videoId);
  const videos = useSelector(state => state.videos);

  useEffect(() => {
    dispatch(currentUser());
    }, []);
  
  //sends request to backend
  const handleClick = (id, i) => {
    //format video info
    const videoFinder = videos.find(video => video.id.videoId === videoId);
    const videoFormat = {
      url: `www.youtube.com/watch?v=${videoFinder.id.videoId}`,
      title: videoFinder.snippet.title,
      thumbnail: videoFinder.snippet.thumbnails.medium.url
    };
    handleClose();
    dispatch(addToCategory(id, videoFormat, i, () => {
      navigate("/", { replace: true });
    }))
  }
  
  //category dropdown
  const data = useSelector(state => state.currentUser);
  let categories = [];
  let Data = data.categories;
  const renderCategories = () => {
    if(Data === [] || Data === undefined || Data.length === 0) {
      return (
          <p>No categories to add to!</p>
      ) 
    } else {
      for (let i = 0; i < Data.length; i++) {
        categories.push(
            <li onClick={() => handleClick(Data[i]._id, i)} key={i} className='lead list-group-item list-group-item-action list-group-item-secondary' >{Data[i].name}</li>
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
          <Modal.Title >Select a category to add to:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row xs={18} md={12} >
              <ul className='list-group list-group'>  
                {renderCategories()}
              </ul>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default VideoToCategory;
