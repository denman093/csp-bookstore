import React from 'react';
import {Jumbotron, Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from '../cspLogo.jpg';
import Image from "react-bootstrap/Image";

class Home extends React.Component {
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
        <h2>Welcome to the CSP Bookstore</h2>
        </Col>
        </Row>
        </Jumbotron>
        <Row>
        <Col md lg={2}>

            </Col>
            <Col md lg={4}>
            <p>In order to use the site, you must do the following:</p>
        <ul>
        <li>Create an account</li>
        <li>Select some textbooks</li>
        <li>Submit your shipping information</li>
        </ul>
        </Col>
        <Col md lg={4}>
            <p>
            Feel free to explore the site! This site is designed for
            the CSCI 435-100 class at CSP. The site incorporates elements
        of frontend and backend web development. Some of these features are
        React, Node.js and MongoDB.
        </p>
        </Col>
        <Col md lg={2}>

            </Col>
            </Row>
            </Container>
    );
    }
}

export default Home;