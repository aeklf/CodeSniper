import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import {Col, Container, Image, Row} from "react-bootstrap";

const Settings = () => {
    console.log(process.env.REACT_APP_PUBLIC_URL)
    return (
        <Container fluid>
            <Row>
                <Col>
                    <Image className="profile-picture" src={process.env.PUBLIC_URL + '/profilePicture.jpeg'} thumbnail roundedCircle/>
                </Col>
                <Col>

                </Col>
            </Row>
        </Container>
  );
}

export default  Settings;