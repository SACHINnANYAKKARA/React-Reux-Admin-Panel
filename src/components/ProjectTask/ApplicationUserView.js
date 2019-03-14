
import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter, Table } from 'reactstrap';
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


    /*
     "first_name": "sachin",
    "last_name": "dw",
    "born": "sachin",
    "email": "sachin",
    "e_level": "sachin",
    "gender": "dw",
    "city": "sachin",
    "street": "de",
    "zipcode": "de",
    "country": "sachin",
    "phone_number": "dw",
    "about_me": "sachin",
    "position": "d",
    "firstinterview_name": "sachin",
    "firstinterview_Date": "2019-02-28T18:30:00.000+0000",
    "firstinterview_starttime": "17:00:00",
    "firstinterview_endtime": "10:00:00",
    "firstinterview_description": "sachin",
    "firstinterview_status": "ddsd",
    "secondinterview_name": "de",
    "secondinterview_Date": "2019-03-12T20:30:00.000+0000",
    "secondinterview_starttime": "13:00:00",
    "secondinterview_endtime": "09:00:00",
    "secondinterview_description": "de",
    "secondinterview_status": "de",
    "thirdinterview_name": "de",
    "thirdinterview_Date": "2019-03-13T02:30:00.000+0000",
    "thirdinterview_starttime": "16:00:00",
    "thirdinterview_endtime": "11:00:00",
    "thirdinterview_description": null,
    "thirdinterview_status": null,
    "commonstatus": "sachin",
    "expectedsalary": "sachin"
    */


    this.state = {

      books: [],
      newBookData: {

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
        about_me: '',
        firstinterview_name: '',
        firstinterview_Date: '',
        firstinterview_starttime: '',
        firstinterview_endtime: '',
        firstinterview_description: '',
        firstinterview_status: '',
        secondinterview_name: '',
        secondinterview_Date: '',
        secondinterview_starttime: '',
        secondinterview_endtime: '',
        secondinterview_description: '',
        secondinterview_status: '',
        thirdinterview_name: '',
        thirdinterview_Date: '',
        thirdinterview_starttime: '',
        thirdinterview_endtime: '',
        thirdinterview_description: '',
        thirdinterview_status: '',
        commonstatus: '',
        expectedsalary: ''

      },

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
      id: '',

      newBookModal: false


    }
  }


  componentWillMount() {
    this._refreshBooks();

  }

  _refreshBooks() {
    axios.get('http://localhost:8090/users/' + this.state.id).then((response) => {
      this.setState({
        books: response.data
      })
    });
  }


  toggleNewBookModal() {
    this.setState({
      newBookModal: !this.state.newBookModal
    });
  }




  addBook() {
    axios.post('http://localhost:8090/Interviewer/2/applicationList', this.state.newBookData).then((response) => {
      let { books } = this.state;

      books.push(response.data);

      this.setState({
        books, newBookModal: false, newBookData: {

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
          about_me: '',
          firstinterview_name: '',
          firstinterview_Date: '',
          firstinterview_starttime: '',
          firstinterview_endtime: '',
          firstinterview_description: '',
          firstinterview_status: '',
          secondinterview_name: '',
          secondinterview_Date: '',
          secondinterview_starttime: '',
          secondinterview_endtime: '',
          secondinterview_description: '',
          secondinterview_status: '',
          thirdinterview_name: '',
          thirdinterview_Date: '',
          thirdinterview_starttime: '',
          thirdinterview_endtime: '',
          thirdinterview_description: '',
          thirdinterview_status: '',
          commonstatus: '',
          expectedsalary: ''


        }
      });
    });
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
          image: response.data.image,

          newBookData: {

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
            about_me: response.data.about_me

          }

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
          <Button className="my-3" color="primary" onClick={this.toggleNewBookModal.bind(this)}>Add Book</Button>

          <h1></h1>

        </Form>




        <Modal isOpen={this.state.newBookModal} toggle={this.toggleNewBookModal.bind(this)}>
          <ModalHeader toggle={this.toggleNewBookModal.bind(this)}>Add To Interview</ModalHeader>
          <ModalBody>

            <FormGroup>
              <Label for="title">Interviewer Name</Label>
              <Input id="title" value={this.state.newBookData.firstinterview_name} onChange={(e) => {
                let { newBookData } = this.state;

                newBookData.firstinterview_name = e.target.value;

                this.setState({ newBookData });
              }} />
            </FormGroup>

            <FormGroup>
              <Label for="title">Interviewer Start Date</Label>
              <Input id="title" value={this.state.newBookData.firstinterview_Date} onChange={(e) => {
                let { newBookData } = this.state;

                newBookData.firstinterview_Date = e.target.value;

                this.setState({ newBookData });
              }} />
            </FormGroup>
           
            <Row form>
           
           
            <FormGroup>
              
              <Label for="title">Interviewer Start Time</Label>
              <Input id="title" value={this.state.newBookData.firstinterview_starttime} onChange={(e) => {
                let { newBookData } = this.state;

                newBookData.firstinterview_starttime = e.target.value;

                this.setState({ newBookData });
              }} />
              <Col/>
              
            </FormGroup>
            
              <FormGroup>
              <Label for="title">Interviewer End Time</Label>
              <Input id="title" value={this.state.newBookData.firstinterview_endtime} onChange={(e) => {
                let { newBookData } = this.state;

                newBookData.firstinterview_endtime = e.target.value;

                this.setState({ newBookData });
              }} />
            </FormGroup>

            </Row>
        




          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.addBook.bind(this)}>Add Book</Button>{' '}
            <Button color="secondary" onClick={this.toggleNewBookModal.bind(this)}>Cancel</Button>
          </ModalFooter>
        </Modal>


      </div>
    )
  }
}