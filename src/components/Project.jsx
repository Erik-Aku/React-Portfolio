import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



function Project({project}) {

    return (
        <Row xs={1} md={2} className="g-4">
         <Col>
          <Card className='card' key={project.id}>
            <Card.Img variant="top" src={project.image} />
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Link href={project.github }>Github</Card.Link>
        <Card.Link href={project.deployed}>Deployed Site</Card.Link>
            </Card.Body>
          </Card>
       </Col>
   </Row>
    );
}

// export Project
export default Project;