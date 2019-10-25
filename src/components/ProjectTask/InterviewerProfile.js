import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';
import './Men.css';


export default class InterviewerProfile extends Component {

    constructor(props) {
        super(props);

        this.onChangeInterviewerName = this.onChangeInterviewerName.bind(this);
        this.onChangePosition = this.onChangePosition.bind(this);
        this.onChangeBirthDate = this. onChangeBirthDate.bind(this);
        this.onChangeJobRole = this.onChangeJobRole.bind(this);
        this.onChangeWorkingExperiance = this.onChangeWorkingExperiance.bind(this);
        this.onChangeResponsibility = this.onChangeResponsibility.bind(this);
        this.onChangeCompanyName = this.onChangeCompanyName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {

            interviewer_name: "",
            position: "",
            birth_date: "",
            job_role: "",
            working_experiance: "",
            responsibility: "",
            comapny_name: "",
            id: '2'

        }
    }


    componentDidMount() {
        axios.get('http://localhost:8090/registorInterviewer/' + this.state.id)
            .then(response => {
                this.setState({

                    interviewer_name: response.data.interviewer_name,
                    position: response.data.position,
                    birth_date: response.data.birth_date,
                    job_role: response.data.job_role,
                    working_experiance: response.data.working_experiance,
                    responsibility: response.data.responsibility,
                    comapny_name: response.data.comapny_name,
                                     

                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeInterviewerName(e) {
        this.setState({
            interviewer_name: e.target.value
        });
    }

    onChangePosition(e) {
        this.setState({
            position: e.target.value
        })
    }

    onChangeBirthDate(e) {
        this.setState({
            birth_date: e.target.value
        });
    }

    onChangeJobRole(e) {
        this.setState({
            job_role: e.target.value
        })
    }

    onChangeWorkingExperiance(e) {
        this.setState({
            working_experiance: e.target.value
        });
    }

    onChangeResponsibility(e) {
        this.setState({
            responsibility: e.target.value
        })
    }

    onChangeCompanyName(e) {
        this.setState({
            comapny_name: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {

            interviewer_name: this.state.interviewer_name,
            position: this.state.position,
            birth_date: this.state.birth_date,
            job_role: this.state.job_role,
            working_experiance: this.state.working_experiance,
            responsibility: this.state.responsibility,
            comapny_name: this.state.comapny_name
           

        };
        axios.put('http://localhost:8090/updateInterviewer/' + this.state.id, obj)
            .then(res => console.log(res.data));

        // this.props.history.push('/index');
    }

    render() {
        return (
            <div class="Appcontainer">

                <h4>Interviewer Details</h4>

                <Form onSubmit={this.onSubmit}>
                 
                    <FormGroup>
                        <Label for="exampleCompanyName">Interviewer Details</Label>
                        <Input type="text" value={this.state.interviewer_name} onChange={this.onChangeInterviewerName} placeholder="Interviewer Name" />
                    </FormGroup>

                   
                    <Row form>
                        <Col md={12}>
                            <FormGroup>
                                <Label for="Total Employee">Position</Label>
                                <Input type="text" value={this.state.position} onChange={this.onChangePosition} placeholder="Position" />
                            </FormGroup>
                        </Col>

                        <Col md={12}>
                            <FormGroup>
                                <Label for="Type">Birth Date</Label>
                                <Input type="text" value={this.state.birth_date} onChange={this.onChangeBirthDate} placeholder="Birth Date" />
                            </FormGroup>
                        </Col>

                        <Col md={12}>
                            <FormGroup>
                                <Label for="Phone Number">Job Role</Label>
                                <Input type="text" value={this.state.job_role} onChange={this.onChangeJobRole} placeholder="Job Role" />
                            </FormGroup>
                        </Col>

                        <Col md={12}>
                            <FormGroup>
                                <Label for="Phone Number">Working Experiance</Label>
                                <Input type="text" value={this.state.working_experiance} onChange={this.onChangeWorkingExperiance} placeholder="Working Experiance" />
                            </FormGroup>
                        </Col>

                        <Col md={12}>
                            <FormGroup>
                                <Label for="Phone Number">Responsibility</Label>
                                <Input type="text" value={this.state.responsibility} onChange={this.onChangeResponsitypo fixbility} placeholder="Resposnabiliety" />
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
