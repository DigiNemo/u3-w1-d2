import book from "../Library/fantasy.json";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container, Row, Col } from 'react-bootstrap';

const SingleBook = (props) => {
    props = book[1]
    return (    
        <Container fluid>
            <Row className="justify-content-center">
                <Col md={6} lg={4} xl={3} className='p-2' key={props.asin}>
                    <Card>
                      <Card.Img variant="top" src={props.img}/>
                       <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                       </Card.Body>
                       <ListGroup className="list-group-flush">
                       <ListGroup.Item>{props.category}</ListGroup.Item>
                       <ListGroup.Item>{props.price}€</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </Container>
)}       
  
  export default SingleBook