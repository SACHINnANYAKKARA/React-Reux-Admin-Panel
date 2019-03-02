import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';
import './Men.css';


export default class AddNewCompany extends Component {

    constructor(props) {
        super(props);

        this.onChangeCityTown = this.onChangeCityTown.bind(this);
        this.onChangeCompanyBackground = this.onChangeCompanyBackground.bind(this);
        this. onChangeCompanyName = this. onChangeCompanyName.bind(this);
        this.onChangeCountry = this.onChangeCountry.bind(this);
        this.onChangeEstablishedIn = this.onChangeEstablishedIn.bind(this);
        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
        this.onChangeStreet = this.onChangeStreet.bind(this);
        this.onChangeTotalemployee = this.onChangeTotalemployee.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onChangeWebsite = this.onChangeWebsite.bind(this);
        this.onChangeZipcode = this.onChangeZipcode.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {

            city_town: "",
            company_background: "",
            company_name: "",
            country: "",
            established_in: "",
            phone_number: "",
            street: "",
            total_employee: "",
            type: "",
            website: "",
            zipcode: "",
            id: '2'

        }
    }


    componentDidMount() {
        axios.get('http://localhost:8090/company/' + 2)
            .then(response => {
                this.setState({

                    city_town: response.data.city_town,
                    company_background: response.data.company_background,
                    company_name: response.data.company_name,
                    country: response.data.country,
                    established_in: response.data.established_in,
                    phone_number: response.data.phone_number,
                    street: response.data.street,
                    total_employee: response.data.total_employee,
                    type: response.data.type,
                    website: response.data.website,
                    zipcode: response.data.zipcode,
                    

                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeCityTown(e) {
        this.setState({
            city_town: e.target.value
        });
    }

    onChangeCompanyBackground(e) {
        this.setState({
            company_background: e.target.value
        })
    }

    onChangeCompanyName(e) {
        this.setState({
            company_name: e.target.value
        });
    }

    onChangeCountry(e) {
        this.setState({
            country: e.target.value
        })
    }

    onChangeEstablishedIn(e) {
        this.setState({
            established_in: e.target.value
        });
    }

    onChangePhoneNumber(e) {
        this.setState({
            phone_number: e.target.value
        })
    }

    onChangeStreet(e) {
        this.setState({
            street: e.target.value
        });
    }

    onChangeTotalemployee(e) {
        this.setState({
            total_employee: e.target.value
        })
    }

    onChangeType(e) {
        this.setState({
            type: e.target.value
        });
    }

    onChangeWebsite(e) {
        this.setState({
            website: e.target.value
        })
    }

    onChangeZipcode(e) {
        this.setState({
            zipcode: e.target.value
        });
    }

  

    onSubmit(e) {
        e.preventDefault();
        const obj = {

            first_name: this.state.first_name,
            last_name: this.state.last_name,
            born: this.state.born,
            email: this.state.email,
            e_level: this.state.e_level,
            gender: this.state.gender,
            city: this.state.city,
            street: this.state.street,
            zipcode: this.state.zipcode,
            country: this.state.country,
            phone_number: this.state.phone_number,
            resume: this.state.resume,
            about_me: this.state.about_me,
            image: this.state.image

        };
        axios.put('http://localhost:8090/company/' + this.state.id, obj)
            .then(res => console.log(res.data));

        // this.props.history.push('/index');
    }

    render() {
        return (
            <div class="Appcontainer">

                <h4>Company Details</h4>

                <Form onSubmit={this.onSubmit}>
                 
                    <FormGroup>
                        <Label for="exampleCompanyName">Company Name</Label>
                        <Input type="text" value={this.state.company_name} onChange={this.onChangeCompanyName} placeholder="Company Name" />
                    </FormGroup>

                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleCity">City</Label>
                                <Input type="text" value={this.state.city_town} onChange={this.onChangeCityTown} placeholder="City" />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="exampleState">Zip</Label>
                                <Input type="text" value={this.state.zipcode} onChange={this.onChangeZipCode} placeholder="Zip" />
                            </FormGroup>
                        </Col>
                        <Col md={2}>
                            <FormGroup>
                                <Label for="exampleZip">Country</Label>
                                <Input type="text" value={this.state.country} onChange={this.onChangeCountry} placeholder="Country" />
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row form>
                        <Col md={12}>
                            <FormGroup>
                                <Label for="Total Employee">Total Employee</Label>
                                <Input type="text" value={this.state.total_employee} onChange={this.onChangeTotalemployee} placeholder="Total Employee" />
                            </FormGroup>
                        </Col>

                        <Col md={12}>
                            <FormGroup>
                                <Label for="Type">Type</Label>
                                <Input type="text" value={this.state.type} onChange={this.onChangeType} placeholder="Type" />
                            </FormGroup>
                        </Col>

                        <Col md={12}>
                            <FormGroup>
                                <Label for="Phone Number">website</Label>
                                <Input type="text" value={this.state.website} onChange={this.onChangeWebsite} placeholder="Phone Number" />
                            </FormGroup>
                        </Col>

                        <Col md={12}>
                            <FormGroup>
                                <Label for="Phone Number">Company BackGround</Label>
                                <Input type="text" value={this.state.company_background} onChange={this.onChangeCompanyBackground} placeholder="Company Background" />
                            </FormGroup>
                        </Col>

                        <Col md={12}>
                            <FormGroup>
                                <Label for="Phone Number">Established In</Label>
                                <Input type="text" value={this.state.established_in} onChange={this.onChangeEstablishedIn} placeholder="Established In" />
                            </FormGroup>
                        </Col>

                        <Col md={12}>
                            <FormGroup>
                                <Label for="Phone Number">Phone Number</Label>
                                <Input type="text" value={this.state.phone_number} onChange={this.onChangePhoneNumber} placeholder="Phone Number" />
                            </FormGroup>
                        </Col>

                        <Col md={12}>
                            <FormGroup>
                                <Label for="Street">Street</Label>
                                <Input type="text" value={this.state.street} onChange={this.onChangeStreet} placeholder="Street" />
                            </FormGroup>
                        </Col>
                   

                    </Row>

                    <Button type="submit" >Sign in</Button>

                </Form>

                <br></br>

            </div>
        )
    }
}