import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addJobTask } from "../../actions/projectJobActions";
import { Button, FormGroup, Input, Label, Row, Col } from 'reactstrap';
import classnames from "classnames";


class AddNewJob extends Component {
    constructor() {
        super();
        this.state = {
            jobtitle: "",
            city: "",
            country: "",
            job_category: "",
            job_type: "",
            start_date: "",
            closing_date: "",
            expected_salary: "",
            job_description: "",
            job_responsability: "",
            requirment: "",
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        const Job_task = {

            jobtitle: this.state.jobtitle,
            city: this.state.city,
            country: this.state.country,
            job_category: this.state.job_category,
            job_type: this.state.job_type,
            start_date: this.state.start_date,
            closing_date: this.state.closing_date,
            expected_salary: this.state.expected_salary,
            job_description: this.state.job_description,
            job_responsability: this.state.job_responsability,
            requirment: this.state.requirment

        };
        // console.log(newProjectTask);
        this.props.addJobTask(Job_task, this.props.history);
    }

    render() {
        const { errors } = this.state;
        return (
            <div className="addCompanyTask">

                <div class="list-groups">

                    <h4>Company Details</h4>

                    <form onSubmit={this.onSubmit}>

                        <FormGroup>
                            <Label for="exampleCompanyName">Job Title</Label>
                            <input
                                type="text"
                                className={classnames("form-control ", {
                                    "is-invalid": errors.jobtitle
                                })}
                                name="jobtitle"
                                value={this.state.jobtitle}
                                placeholder="Job Title"
                                onChange={this.onChange}
                            />
                            {errors.jobtitle && (
                                <div className="invalid-feedback">{errors.jobtitle}</div>
                            )}
                        </FormGroup>


                        <FormGroup>
                            <Label for="exampleCompanyName">City</Label>
                            <Input type="text"

                                placeholder="City"
                                name="city"
                                value={this.state.city}
                                onChange={this.onChange}
                            />
                        </FormGroup>



                        <FormGroup>
                            <Label for="exampleCompanyName">Country</Label>
                            <Input type="text"

                                placeholder="Country"
                                name="country"
                                value={this.state.country}
                                onChange={this.onChange}
                            />
                        </FormGroup>



                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleCompanyName">Start Date</Label>
                                    <Input type="text"
                                        placeholder="Start Date"
                                        name="start_date"
                                        value={this.state.start_date}
                                        onChange={this.onChange}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleCompanyName">Closing Date</Label>
                                    <Input type="text"
                                        placeholder="Closing Date"
                                        name="closing_date"
                                        value={this.state.closing_date}
                                        onChange={this.onChange}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>

                        <FormGroup>
                            <Label for="exampleCompanyName">Job Category</Label>
                            <Input type="text"

                                placeholder="Job Category"
                                name="job_category"
                                value={this.state.job_category}
                                onChange={this.onChange}
                            />
                        </FormGroup>


                        <FormGroup>
                            <Label for="exampleCompanyName">Job Type</Label>
                            <Input type="text"

                                placeholder="Job Type"
                                name="job_type"
                                value={this.state.job_type}
                                onChange={this.onChange}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="exampleCompanyName">Expected Salary</Label>
                            <Input type="text"
                                placeholder="Expected Slary"
                                name="expected_salary"
                                value={this.state.expected_salary}
                                onChange={this.onChange}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="exampleCompanyName">Job Description</Label>
                            <Input type="text"

                                placeholder="Job Description"
                                name="job_description"
                                value={this.state.job_description}
                                onChange={this.onChange}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="exampleCompanyName">Job Responsabiliety</Label>
                            <Input type="textarea"

                                placeholder="Job Responsbiliety"
                                name="job_responsability"
                                value={this.state.job_responsability}
                                onChange={this.onChange}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="exampleCompanyName">Requriment</Label>
                            <Input type="textarea"

                                placeholder="Requriemnt"
                                name="requirment"
                                value={this.state.requirment}
                                onChange={this.onChange}
                            />
                        </FormGroup>

                        <Button type="submit" >Sign in</Button>

                        <Link to="/" className="btn btn-light">
                            Back to Board
                             </Link>{}
                        <Link to="/jobUpdateDelete" className="btn btn-light">
                            Applied Job
                             </Link>



                    </form>
                    <br></br>
                </div>
            </div>


        );
    }
}

AddNewJob.propTypes = {
    addJobTask: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { addJobTask }
)(AddNewJob);
