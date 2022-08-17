import "./settings.css";
import {Col, Container, Image, Row, Card, Spinner, Button} from "react-bootstrap";
import {GET_ME} from '../../utils/queries';
import {DELETE_POST} from '../../utils/mutations';
import {useQuery, useMutation} from "@apollo/client";
import Auth from "../../utils/auth";

const Settings = () => {
    if (!Auth.loggedIn()) {
        window.location.assign("/login");
    }

    const [deletePost, {error}] = useMutation(DELETE_POST);
    const {loading, data} = useQuery(GET_ME);
    let userData;

    if (!loading) {
        userData = data.me;
    }
    else {
        return (
            <Container className="loading-spinner">
                <Row>
                    <Col className="text-center mt-5">
                        <Spinner animation="grow"/>
                        <Spinner animation="grow"/>
                        <Spinner animation="grow"/>
                    </Col>
                </Row>
            </Container>
        );
    }

    const handleDeletePost = async (postId) => {
        console.log(postId);
        try {
            const {data} = await deletePost({
                variables: {postId: postId}
            });
            if (!data) {
                throw new Error('Something went wrong!');
            }
        }catch (err) {
            console.error(err);
        }
    }

    return (
        <Container fluid>
            <Row>
                <Col className="text-center ml-3" md={{span: 3}}>
                    <Image className="profile-picture" src={process.env.PUBLIC_URL + '/profilePicture.jpeg'} thumbnail roundedCircle/>
                    <h3 className="text-center mt-2">{`${userData.username}`}</h3>
                    <h3 className="text-center mt-2">{`${userData.email}`}</h3>
                </Col>
                <Col md={{ span: 7, offset: 1 }}>
                    {userData.userPosts.map((post) => {
                        return (
                            <Card key={post._id} className="text-center mt-4">
                                <Card.Header>{post.topic}</Card.Header>
                                <Card.Body>
                                    <Card.Title>{post.title}</Card.Title>
                                    <Card.Text>
                                        {post.content}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Button variant="danger" onClick={() => handleDeletePost(post._id)}>Delete post</Button>
                                </Card.Footer>
                            </Card>
                        )
                    })}
                </Col>
            </Row>
        </Container>
  );
}

export default  Settings;