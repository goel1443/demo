import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Card from 'react-bootstrap/Card';
import { Container, Row,Button } from 'react-bootstrap';
import { fake } from './Data/Fake';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';


function App() {
  let a={
    name:'john',
    email:"john@gmail.com"
  }
  return (
    <div className="App">
      <Container>
        <Row>
            <FontAwesomeIcon icon={faWhatsapp} className='text-danger '/> 
                    
            <FontAwesomeIcon icon={faFacebook}/> 
            <FontAwesomeIcon icon={faPhone}/> 

        </Row>
      </Container>
      


    </div>
  );
}

export default App;

function ChildCardItem({item}){
  return (
    <div className="col-3 mb-4">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{item.id} {item.title}</Card.Title>
        <Card.Text>
          {item.body}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}