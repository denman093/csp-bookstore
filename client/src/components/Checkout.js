import React from 'react';
import {Jumbotron, Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from '../cspLogo.jpg';
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import FormLabel from "react-bootstrap/FormLabel";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

class Checkout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            address: "",
            city: "",
            st: "",
            phone: ""
        };
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleStateChange = this.handleStateChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleAddressChange(e) {
        this.setState({ address: e.target.value });
    }
    handleCityChange(e) {
        this.setState({ city: e.target.value });
    }
    handleStateChange(e) {
        this.setState({ st: e.target.value });
    }
    handlePhoneChange(e) {
        this.setState({ phone: e.target.value });
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log('Address: ' + this.state.address + '\n' +
            'City: ' + this.state.city + '\n' +
            'State: ' + this.state.st + '\n' +
            'Phone Number: ' + this.state.phone);
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
                            <h2>Checkout</h2>
                        </Col>
                    </Row>
                </Jumbotron>
                <Form onSubmit={this.handleSubmit}>
                    <FormLabel>
                        Address
                    </FormLabel>
                    <FormControl
                        type="text"
                        value={this.state.address}
                        onChange={this.handleAddressChange}
                    />
                    <FormLabel>
                        City:
                    </FormLabel>
                    <FormControl
                        type="text"
                        value={this.state.city}
                        onChange={this.handleCityChange}
                    />
                    <FormLabel>
                        State:
                    </FormLabel>
                    <FormControl
                        type="text"
                        value={this.state.st}
                        onChange={this.handleStateChange}
                    />
                    <FormLabel>
                        Phone Number:
                    </FormLabel>
                    <FormControl
                        type="text"
                        value={this.state.phone}
                        onChange={this.handlePhoneChange}
                    />
                    <Button variant="primary" type="submit">
                        Submit Order
                    </Button>
                </Form>
            </Container>
        );
    }
}

export default Checkout;