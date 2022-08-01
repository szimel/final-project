import { Card } from "react-bootstrap";
import { Row, Container, } from "react-bootstrap";
import { videoId } from "../actions";
import Modal from './modal'
const { useSelector, useDispatch } = require("react-redux")



const Cards = () => {
  const dispatch = useDispatch();
  const videos = useSelector(state => state.videos);


  //youtube video cards
  let cards = [];
  const click = (id) => {
    window.open(`https://www.youtube.com/watch?v=${id}`)
  }

  //video id used for adding to category
  const cardId = (id) => {
    dispatch(videoId(id));
  }

  const renderVideos = () => {
    if(videos === []) {
      return null; 
    } else {
      for (let i = 0; i < videos.length; i++) {
        cards.push(
          <Card style={{ width: '18rem' }} key={i} className='m-1 color' >
            <Card.Img varient='top' src={videos[i].snippet.thumbnails.medium.url} onClick={() => click(videos[i].id.videoId)}/>
            <Card.Body>
              <Card.Title onClick={() => click(videos[i].id.videoId)}>{decodeURIComponent(videos[i].snippet.title)}</Card.Title>
              <div onClick={() => cardId(videos[i].id.videoId)}>
                <Modal />
              </div>

            </Card.Body>
          </Card>
        )
      };
      return cards;
    }
  }
  
  return (
    <Container >
      <Row className='pt-4 mx-auto'>
        {renderVideos()}
      </Row>
    </Container>
  )
}

export default Cards;