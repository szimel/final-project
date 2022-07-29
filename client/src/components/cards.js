import { Card } from "react-bootstrap";
import { Row, Container, Dropdown } from "react-bootstrap";
import Modal from './modal'
const { useSelector } = require("react-redux")



const Cards = () => {
  const videos = useSelector(state => state.videos);

  //youtube video cards
  let cards = [];
  const click = (id) => {
    window.open(`https://www.youtube.com/watch?v=${id}`)
  }

  const renderVideos = () => {
    if(videos === []) {
      return null; 
    } else {
      for (let i = 0; i < videos.length; i++) {
        cards.push(
          <Card bg={'light'} style={{ width: '18rem' }} key={i} className='m-1' >
            <Card.Img varient='top' src={videos[i].snippet.thumbnails.medium.url} onClick={() => click(videos[i].id.videoId)}/>
            <Card.Body>
              <Card.Title onClick={() => click(videos[i].id.videoId)}>{videos[i].snippet.title}</Card.Title>
              <Modal />
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