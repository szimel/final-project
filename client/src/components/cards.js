import { Card } from "react-bootstrap";
import { Row, Container, Dropdown } from "react-bootstrap";


const { useSelector } = require("react-redux")


const Cards = () => {
  const videos = useSelector(state => state.videos);
  console.log(videos);
  let data = [];

  const click = (id) => {
    window.open(`https://www.youtube.com/watch?v=${id}`)
  }

  const renderVideos = () => {
    if(videos === []) {
      return null; 
    } else {
      for (let i = 0; i < videos.length; i++) {
        data.push(
          <Card bg={'light'} style={{ width: '18rem' }} key={i} className='m-1' >
            <Card.Img varient='top' src={videos[i].snippet.thumbnails.medium.url} onClick={() => click(videos[i].id.videoId)}/>
            <Card.Body>
              <Card.Title onClick={() => click(videos[i].id.videoId)}>{videos[i].snippet.title}</Card.Title>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Add
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="/">Reload</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
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