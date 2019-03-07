
    import React, { Component } from 'react';
    import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
    import axios from 'axios';

    
    
    export default class Bill extends Component {
    
      constructor(props) {
        super(props);
    
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeBorn = this.onChangeBorn.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeElevel = this.onChangeElevel.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangeStreet = this.onChangeStreet.bind(this);
        this.onChangeZipCode = this.onChangeZipCode.bind(this);
        this.onChangeCountry = this.onChangeCountry.bind(this);
        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
        this.onChangeAboutMe = this.onChangeAboutMe.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.onChangeResume = this.onChangeResume.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
    
          first_name: '',
          last_name: '',
          born: '',
          email: '',
          e_level: '',
          gender: '',
          city: '',
          street: '',
          zipcode: '',
          country: '',
          phone_number: '',
          resume: '',
          about_me: '',
          image: '',
          id: ''
    
        }
      }
    
    
      componentDidMount() {

        const { id } = this.props.match.params;
        console.log(id);
    

        axios.get('http://localhost:8090/users/' + id)
          .then(response => {
            this.setState({
    
              first_name: response.data.first_name,
              last_name: response.data.last_name,
              born: response.data.born,
              email: response.data.email,
              e_level: response.data.e_level,
              gender: response.data.gender,
              city: response.data.city,
              street: response.data.street,
              zipcode: response.data.zipcode,
              country: response.data.country,
              phone_number: response.data.phone_number,
              resume: response.data.resume,
              about_me: response.data.about_me,
              image: response.data.image
    
            });
          })
          .catch(function (error) {
            console.log(error);
          })
      }
    
      onChangeFirstName(e) {
        this.setState({
          first_name: e.target.value
        });
      }
    
      onChangeLastName(e) {
        this.setState({
          last_name: e.target.value
        })
      }
    
      onChangeBorn(e) {
        this.setState({
          born: e.target.value
        });
      }
    
      onChangeEmail(e) {
        this.setState({
          email: e.target.value
        })
      }
    
      onChangeElevel(e) {
        this.setState({
          e_level: e.target.value
        });
      }
    
      onChangeGender(e) {
        this.setState({
          gender: e.target.value
        })
      }
    
      onChangeCity(e) {
        this.setState({
          city: e.target.value
        });
      }
    
      onChangeStreet(e) {
        this.setState({
          street: e.target.value
        })
      }
    
      onChangeZipCode(e) {
        this.setState({
          zipcode: e.target.value
        });
      }
    
      onChangeCountry(e) {
        this.setState({
          country: e.target.value
        })
      }
    
      onChangePhoneNumber(e) {
        this.setState({
          phone_number: e.target.value
        });
      }
    
      onChangeAboutMe(e) {
        this.setState({
          about_me: e.target.value
        })
      }
    
      onChangeImage(e) {
        this.setState({
          image: e.target.value
        });
      }
    
      onChangeResume(e) {
        this.setState({
          resume: e.target.value
        })
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
        axios.put('http://localhost:8090/users/' + this.state.id, obj)
          .then(res => console.log(res.data));
    
        // this.props.history.push('/index');
      }
    
      render() {
        return (
          <div class="list-groups">
    
    
            <Form onSubmit={this.onSubmit}>
              <Row form>
    
                <Col md={6}>
    
                  <FormGroup>
                    <Label for="exampleEmail">First Name</Label>
                    <Input type="text" value={this.state.first_name} onChange={this.onChangeFirstName} placeholder="First Name" />
                  </FormGroup>
                </Col>
    
                <Col md={6}>
                  <FormGroup>
                    <Label for="examplePassword">Last Name</Label>
                    <Input type="text" value={this.state.last_name} onChange={this.onChangeLastName} placeholder="Last Name" />
                  </FormGroup>
                </Col>
    
              </Row>
    
              <Row form>
    
                <Col md={6}>
                  <FormGroup>
                    <Label for="examplePassword">Born</Label>
                    <Input type="text" value={this.state.born} onChange={this.onChangeBorn} placeholder="Born" />
                  </FormGroup>
                </Col>
    
                <Col md={6}>
                  <FormGroup>
                    <Label for="examplePassword">E Mail</Label>
                    <Input type="text" value={this.state.email} onChange={this.onChangeEmail} placeholder="E Mail" />
                  </FormGroup>
                </Col>
    
              </Row>
    
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="examplePassword">E Level</Label>
                    <Input type="text" value={this.state.e_level} onChange={this.onChangeElevel} placeholder="E Level" />
                  </FormGroup>
                </Col>
    
                <Col md={6}>
                  <FormGroup>
                    <Label for="examplePassword">Gender</Label>
                    <Input type="text" value={this.state.gender} onChange={this.onChangeGender} placeholder="Gender" />
                  </FormGroup>
                </Col>
              </Row>
    
    
    
              <FormGroup>
                <Label for="exampleAddress">Street</Label>
                <Input type="text" value={this.state.street} onChange={this.onChangeStreet} placeholder="Street" />
              </FormGroup>
    
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleCity">City</Label>
                    <Input type="text" value={this.state.city} onChange={this.onChangeCity} placeholder="City" />
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
                    <Label for="Phone Number">Born</Label>
                    <Input type="text" value={this.state.phone_number} onChange={this.onChangePhoneNumber} placeholder="Phone Number" />
                  </FormGroup>
                </Col>
    
                <Col md={12}>
                  <FormGroup>
                    <Label for="Phone Number">Resume</Label>
                    <Input type="text" value={this.state.resume} onChange={this.onChangeResume} placeholder="Resume" />
                  </FormGroup>
                </Col>
    
                <Col md={12}>
                  <FormGroup>
                    <Label for="Phone Number">About Me</Label>
                    <Input type="textarea" value={this.state.about_me} onChange={this.onChangeAboutMe} placeholder="About Me" />
                  </FormGroup>
                </Col>
    
                <Col md={12}>
                  <FormGroup>
                    <Label for="Phone Number">Image</Label>
                    <Input type="text" value={this.state.image} onChange={this.onChangeImage} placeholder="Image" />
                  </FormGroup>
                </Col>
    
              </Row>
    
              <Button type="submit" >Sign in</Button>
    
            </Form>
    
    
          </div>
        )
      }
    }