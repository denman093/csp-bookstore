import Form from "react-bootstrap/Form";
import Jumbotron from "react-bootstrap/Jumbotron";
import React from "react";
import FormLabel from "react-bootstrap/FormLabel";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import axios from 'axios';
import Image from "react-bootstrap/Image";
import Logo from "../cspLogo.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class CreateAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            username: "",
            password: ""
        };
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFirstNameChange(e) {
        this.setState({ firstName: e.target.value });
    }
    handleLastNameChange(e) {
        this.setState({ lastName: e.target.value });
    }
    handleUserNameChange(e) {
        this.setState({ username: e.target.value });
    }
    handlePasswordChange(e) {
        this.setState({ password: e.target.value });
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log('Username: ' + this.state.username +'\n' +
            'Password: ' + this.state.password + '\n' +
            'First Name: ' + this.state.firstName +'\n' +
            'Last Name: ' + this.state.lastName);

        const payload = {
            username: this.state.username,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName
        };

        axios({
            url: '/api/save',
            method: 'POST',
            data: payload
        })
            .then(() => {
                console.log('Data sent to the server');
                this.resetUserInput();
            })
            .catch(() => {
                console.log('Error occurred while sending data to server');
                this.resetUserInput();
            })
    }

    resetUserInput = () => {
        this.setState({
            username: '',
            password: '',
            firstName:'',
            lastName:''
        });
    };

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
                            <h2>Create Account</h2>
                        </Col>
                    </Row>
                </Jumbotron>
            <Form onSubmit={this.handleSubmit}>
                <FormLabel>
                    First Name:
                </FormLabel>
                <FormControl
                    type="text"
                    value={this.state.firstName}
                    onChange={this.handleFirstNameChange}
                />
                <FormLabel>
                    Last Name:
                </FormLabel>
                <FormControl
                    type="text"
                    value={this.state.lastName}
                    onChange={this.handleLastNameChange}
                />
                <FormLabel>
                    Username:
                </FormLabel>
                <FormControl
                    type="text"
                    value={this.state.username}
                    onChange={this.handleUserNameChange}
                />
                <FormLabel>
                    Password:
                </FormLabel>
                <FormControl
                    type="password"
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                />
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </Container>
        );
    }
}

export default CreateAccount;