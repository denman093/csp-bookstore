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
import axios from "axios";

class Checkout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            address: "",
            city: "",
            state: "",
            phone: "",
            posts: []
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
        this.setState({ state: e.target.value });
    }
    handlePhoneChange(e) {
        this.setState({ phone: e.target.value });
    }

    getShippingPost = () => {
        axios.get('/api/getShipping')
            .then((response) => {
                const data = response.data;
                this.setState({posts: data});
                console.log('Data has been received');
            })
            .catch(() => {
                alert('Error getting data');
            })
    };

    componentDidMount = () => {
        this.getShippingPost();
    };

    displayShipping = posts => {
        return posts.map((post,index) => {
            return (
                <div key={index}>
                    <h6>City: {post.city}</h6>
                    <h6>State: {post.state}</h6>
                    <br />
                </div>
            );
        });
    };

    handleSubmit(e) {
        e.preventDefault();

        alert('Your Books will be shipped immediately');

        const payload = {
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            phone: this.state.phone
        };

        axios({
            url: '/api/saveShipping',
            method: 'POST',
            data: payload
        })
            .then(() => {
                console.log('Data sent to the server');
                this.resetShippingInput();
            })
            .catch(() => {
                console.log('Error occurred while sending data to server');
                this.resetShippingInput();
            })
    }

    resetShippingInput = () => {
        this.setState({
            address: '',
            city: '',
            state:'',
            phone:''
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
                        value={this.state.state}
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
                    <Row>
                        <Col md lg={5}>

                        </Col>
                        <Col md lg={2}>
                            <Button variant="dark" type="submit">
                                Place Order
                            </Button>
                        </Col>
                        <Col md lg={5}>

                        </Col>
                    </Row>
                </Form>
                <div className="databaseDisplay">
                    <h4>List of Cities and States that bought a Book</h4>
                    {this.displayShipping(this.state.posts)}
                </div>
            </Container>
        );
    }
}

export default Checkout;