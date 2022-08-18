import "./write.css";
import React, {useState} from "react";
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import { useMutation } from "@apollo/client";
import { WRITE_POST } from '../../utils/mutations';
import Auth from "../../utils/auth";

const WritePost = () => {

  const [postData, setPostData] = useState({ title:'', topic:'', content:''})
  const [addPost, {error}] = useMutation(WRITE_POST);

  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setPostData({...postData, [name]:value})
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    const token = Auth.loggedIn() ? Auth.getToken() : null;

    try {
      const {data} = await addPost({
        variables: {title: postData.title, topic:postData.topic, content:postData.content}
      });
    }catch (err) {
      console.log(err)
    }

    setPostData({
      title:'',
      topic:'',
      content:'',
    });
  }

  return (
    <Container fluid>
      <Row>
        <img
        className="image"
        src="https://www.oberlo.com/media/1603968872-digital-nomad.jpg?fm=webp&w=1824&fit=max"
        alt="Cinque Terre"
        />
      </Row>

      <Row className="mt-4">
        <Col id="TextBox" md={{ span: 6, offset: 3 }} className="text-center">
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title: </Form.Label>
              <Form.Control type='text' name="title" placeholder="...type the code" onChange={handleInputChange} value={postData.title}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Topic: </Form.Label>
              <Form.Control type='text' name="topic" placeholder="... web development" onChange={handleInputChange} value={postData.topic}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Type your code here: </Form.Label>
              <Form.Control as="textarea" type='text' name="content" placeholder="console.log('Hello Mexico')" rows={3} onChange={handleInputChange} value={postData.content}/>
            </Form.Group>
            {/*<button type='submit' className="submitButton" onClick={handleFormSubmit}>Post</button>*/}
            <Button variant="primary" type='submit' size="lg" onClick={handleFormSubmit}>Post</Button>
          </Form>
        </Col>
      </Row>

    </Container>
  );
}

export default WritePost;