import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import fantasy from "../Library/fantasy.json"
import history from "../Library/history.json"
import horror from "../Library/horror.json"
import romance from "../Library/romance.json"
import scifi from "../Library/scifi.json"
import { Container, Row, Col } from 'react-bootstrap';

const AllTheBooks = () => {
  return (    
    <Container fluid>
        <Row>
            
                    {fantasy.map((book)=>{
                return (
                    <>
                    <Col md={6} lg={4} xl={3} className='p-2'>
                    <Card>

                    <Card.Img variant="top" src={book.img} key={book.id} />
                     <Card.Body>
                      <Card.Title>{book.title}</Card.Title>
                     </Card.Body>
                     <ListGroup className="list-group-flush">
                     <ListGroup.Item>{book.category}</ListGroup.Item>
                     <ListGroup.Item>{book.price}€</ListGroup.Item>
                      </ListGroup>
                      </Card>
                      </Col>
                      </>
                )})}
                {history.map((book)=>{
                return (
                    <>
                    <Col md={6} lg={4} xl={3} className='p-2'>
                    <Card>

                    <Card.Img variant="top" src={book.img} key={book.id} />
                     <Card.Body>
                      <Card.Title>{book.title}</Card.Title>
                     </Card.Body>
                     <ListGroup className="list-group-flush">
                     <ListGroup.Item>{book.category}</ListGroup.Item>
                     <ListGroup.Item>{book.price}€</ListGroup.Item>
                      </ListGroup>
                      </Card>
                      </Col>
                      </>
                )})}
                {horror.map((book)=>{
                return (
                    <>
                    <Col md={6} lg={4} xl={3} className='p-2'>
                    <Card>

                    <Card.Img variant="top" src={book.img} key={book.id} />
                     <Card.Body>
                      <Card.Title>{book.title}</Card.Title>
                     </Card.Body>
                     <ListGroup className="list-group-flush">
                     <ListGroup.Item>{book.category}</ListGroup.Item>
                     <ListGroup.Item>{book.price}€</ListGroup.Item>
                      </ListGroup>
                      </Card>
                      </Col>
                      </>
                )})}
                {romance.map((book)=>{
                return (
                    <>
                    <Col md={6} lg={4} xl={3} className='p-2'>
                    <Card>

                    <Card.Img variant="top" src={book.img} key={book.id} />
                     <Card.Body>
                      <Card.Title>{book.title}</Card.Title>
                     </Card.Body>
                     <ListGroup className="list-group-flush">
                     <ListGroup.Item>{book.category}</ListGroup.Item>
                     <ListGroup.Item>{book.price}€</ListGroup.Item>
                      </ListGroup>
                      </Card>
                      </Col>
                      </>
                )})}
                {scifi.map((book)=>{
                return (
                    <>
                    <Col md={6} lg={4} xl={3} className='p-2'>
                    <Card>

                    <Card.Img variant="top" src={book.img} key={book.id} />
                     <Card.Body>
                      <Card.Title>{book.title}</Card.Title>
                     </Card.Body>
                     <ListGroup className="list-group-flush">
                     <ListGroup.Item>{book.category}</ListGroup.Item>
                     <ListGroup.Item>{book.price}€</ListGroup.Item>
                      </ListGroup>
                      </Card>
                      </Col>
                      </>
                )})}
                     </Row>
                     </Container>
  )}

export default AllTheBooks