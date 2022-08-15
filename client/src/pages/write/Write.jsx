import "./write.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';


export default function Write() {
  return (
    <Container fluid>
      <Row>
        <img
        className="image"
        src="https://www.oberlo.com/media/1603968872-digital-nomad.jpg?fm=webp&w=1824&fit=max"
        alt="Cinque Terre"
        />
      </Row>

      <Row>
      {/* <Col md={{ span: 6, offset: 3 }}>
        

      </Col> */}

        <br>
        </br>
      </Row>

      {/* <Row> */}
        <Form>
          <Col id="TextBox" md={{ span: 6, offset: 3 }}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title: </Form.Label>
              <Form.Control type="email" placeholder="...type the code" />
            </Form.Group>
          </Col>
          
          <Col id="TextBox" md={{ span: 6, offset: 3 }}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Topic: </Form.Label>
              <Form.Control type="topic" placeholder="... web development" />
            </Form.Group>
          </Col>

          <Col md={{ span: 6, offset: 3 }}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Type your code here: </Form.Label>
              <Form.Control as="textarea" placeholder="console.log('Hello Mexico')" rows={3} />            
            </Form.Group>
          </Col>
        </Form> 

      <Row>
          {/* <form className="writeForm">
            <div className="writeFormGroup">
              <label htmlFor="fileInput">
              </label>
              <input id="fileInput" type="file" style={{ display: "none" }} />
              <input
                className="writeInput"
                placeholder="Title"
                type="text"
                autoFocus={true}
              />
            </div>
            <div className="writeFormGroup">
              <textarea
                className="writeInput writeText"
                placeholder="Tell your story..."
                type="text"
                autoFocus={true}
              />
            </div>
            <button className="writeSubmit" type="submit">
              Publish
            </button>
          </form> */}
      </Row>
    
    </Container>
  );
}
