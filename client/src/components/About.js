import React from 'react';
import {Jumbotron, Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from '../cspLogo.jpg';
import Image from "react-bootstrap/Image";

class About extends React.Component {
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
                            <h2>About this App</h2>
                        </Col>
                    </Row>
                </Jumbotron>
                <p>This app was created using some of the following features:</p>
                <ul>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>React</li>
                    <li>MongoDB</li>
                </ul>
                <p>These features all are used in MERN stacks.  The trickiest part was linking
                    the MONGOdb aspect to the app.  Otherwise, most of the backend features were created
                    at the end of the course.  React was the main feature for the first half of the course.
                </p>
                <p>Using these features makes plain old HTML, CSS, and JavaScript obsolete, in my opinion.
                    Was fun learning these features and am looking forward to creating more apps in the futures.
                </p>
            </Container>
        );
    }
}

export default About;