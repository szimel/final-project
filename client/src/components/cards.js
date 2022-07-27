import { Card } from "react-bootstrap";
import { Button, Row, Container } from "react-bootstrap";


const { useSelector } = require("react-redux")


const Cards = () => {
  const videos = useSelector(state => state.videos);
  console.log(videos);
  let data = [];

  const renderVideos = () => {
    if(videos === []) {
      return null; 
    } else {
      for (let i = 0; i < videos.length; i++) {
        data.push(
          <Card bg={'light'} style={{ width: '18rem' }} key={i} className='m-1'>
            <Card.Img varient='top' src={videos[i].snippet.thumbnails.medium.url} />
            <Card.Body>
              <Card.Title>{videos[i].snippet.title}</Card.Title>
              <Button varient='primary'>Add</Button>
            </Card.Body>
          </Card>
        )
      };
      return data;
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