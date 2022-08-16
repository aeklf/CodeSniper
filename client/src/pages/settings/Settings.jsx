import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import {Col, Container, Image, Row, Card} from "react-bootstrap";

const Settings = () => {
    console.log(process.env.REACT_APP_PUBLIC_URL)
    return (
        <Container fluid>
            <Row>
                <Col className="text-center" md={{span: 3}}>
                    <Image className="profile-picture" src={process.env.PUBLIC_URL + '/profilePicture.jpeg'} thumbnail roundedCircle/>
                    <h1>Username</h1>
                    <h1>Email</h1>
                </Col>
                <Col md={{ span: 7, offset: 1 }}>
                    <Card className="text-center">
                        <Card.Header>Featured</Card.Header>
                        <Card.Body>
                            <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">2 days ago</Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
  );
}

export default  Settings;