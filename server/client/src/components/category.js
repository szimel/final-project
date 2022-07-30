import { useEffect } from "react";
import { Card, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { currentUser } from "../actions";
import BasicNavbar from "./basic-navbar";


const Category = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentUser());
    }, []);
  const category = useSelector(state => state.currentUser.categories);
  const categoryChooser = useSelector(state => state.categoryId);

  //find clicked on category
  const data = category[categoryChooser]

  //open youtube video in new tab
  const click = (id) => {
    window.open(`https://${id}`)
  }

  //render videos
  const Data = data.videos;
  let cards = [];
  const cardRender = () => {
    if(Data === []) {
      return (
        <p>No videos in this category!</p>
      );
    } else {
      for (let i = 0; i < Data.length; i++) {
        const element = Data[i];
        cards.push(
          <Card bg={'light'} style={{ width: '18rem' }} key={i} className='m-1' onClick={() => click(element.url)}>
            <Card.Img varient='top' src={element.thumbnail} />
            <Card.Body>
              <Card.Title >{element.title}</Card.Title>
            </Card.Body>
          </Card>
        );
      };
      return cards
    };
  };

  return (
    <>
      <BasicNavbar />
      <Container >
        <Row className='pt-4 mx-auto'>
          {cardRender()}
        </Row>
      </Container>
    </>
  )
};

export default Category;