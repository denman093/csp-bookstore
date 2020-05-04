import React from 'react';
import {Jumbotron, Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from '../cspLogo.jpg';
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

class TextBooks extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            name: '',
            price: '',
            url: '',
            posts: [ ]
        };
    }

    componentDidMount = () => {
        this.getTextbookPost();
    };

    getTextbookPost = () => {
        axios.get('/api/getTextbook')
            .then((response) => {
                const data = response.data;
                this.setState({
                    posts: data
                });
                console.log('Data has been received');
            })
            .catch(() => {
                alert('Error getting data');
            })
    };

    displayTextbooks = posts => {
        return posts.map((post,index) => {
            return (
                <Row key={index}>
                    <Col md lg={4}>
                        <Image src={post.url}
                               alt="textPhoto"
                               fluid
                               width={171}
                               height={180}/>
                    </Col>
                    <Col md lg={3}>
                        <h4>{post.name}</h4>
                    </Col>
                    <Col md lg={3}>
                        <h4>{post.price}</h4>
                    </Col>
                    <Col md lg={2}>
                        <Button variant="dark" type="submit">
                            Confirm Selection
                        </Button>
                    </Col>
                </Row>
            );
        });
    };

    handleSubmit(e) {
        e.preventDefault();
        alert('Selection has been Saved');
    }

    render() {

        return (
            <Container>
                <Jumbotron fluid>
                    <Row>
                        <Col>
                            <Image src={Logo}
                                   alt="CSPLogo"
                                   fluid
                                   width={171}
                                   height={180}/>
                        </Col>
                        <Col>
                            <h2>Available Textbooks</h2>
                        </Col>
                    </Row>
                </Jumbotron>
                <Form onSubmit={this.handleSubmit}>
                    {this.displayTextbooks(this.state.posts)}
                </Form>
            </Container>
        );
    }
}

export default TextBooks;