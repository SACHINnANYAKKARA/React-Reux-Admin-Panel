import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addInterviewerTask } from "../../actions/projectInterviewer";
import { Button, FormGroup, Input,Label } from 'reactstrap';
import classnames from "classnames";
import './Men.css';

/*
  "interviewer_name": "sd",
    "position": "ds",
    "birth_date": "ds",
    "job_role": "ds",
    "working_experiance": "ds",
    "responsability": "sd",
    "comapny_name": "ds",
*/


class RegistorInterviewer extends Component {
    constructor() {
        super();
        this.state = {
            interviewer_name: "",
            position: "",
            birth_date: "",
            job_role: "",
            working_experiance: "",
            responsability: "",
            comapny_name: "",
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
        const interviewer_task = {

            interviewer_name: this.state.interviewer_name,
            position: this.state.position,
            birth_date: this.state.birth_date,
            job_role: this.state.job_role,
            working_experiance: this.state.working_experiance,
            responsability: this.state.responsability,
            comapny_name: this.state.comapny_name


        };
        // console.log(newProjectTask);
        this.props.addInterviewerTask(interviewer_task, this.props.history);
    }

    render() {
        const { errors } = this.state;
        return (
            <div className="addInterviewerTask">

                <div class="list-groups">
                
                    <h4>Department</h4>

                    <form onSubmit={this.onSubmit}>

                        <FormGroup>
                        <Label for="exampleCompanyName">Registor Interviewer</Label>
                            <input
                                type="text"
                                className={classnames("form-control ", {
                                    "is-invalid": errors.interviewer_name
                                })}
                                name="interviewer_name"
                                value={this.state.interviewer_name}
                                placeholder="Interviewer Name"
                                onChange={this.onChange}
                            />
                            {errors.interviewer_name && (
                                <div className="invalid-feedback">{errors.interviewer_name}</div>
                            )}
                        </FormGroup>


                        <FormGroup>
                        <Label for="exampleCompanyName">Position</Label>
                            <Input type="text"

                                placeholder="Position"
                                name="position"
                                value={this.state.position}
                                onChange={this.onChange}
                            />
                        </FormGroup>

                        <FormGroup>
                        <Label for="exampleCompanyName">Birth Date</Label>
                            <Input type="text"

                                placeholder="Birth Date"
                                name="birth_date"
                                value={this.state.birth_date}
                                onChange={this.onChange}
                            />
                        </FormGroup>

                        <FormGroup>
                        <Label for="exampleCompanyName">Job Role</Label>
                            <Input type="text"

                                placeholder="Job Role"
                                name="job_role"
                                value={this.state.job_role}
                                onChange={this.onChange}
                            />
                        </FormGroup>


                        <FormGroup>
                        <Label for="exampleCompanyName">Working Experiance</Label>
                            <Input type="text"

                                placeholder="Working Experiance"
                                name="working_experiance"
                                value={this.state.working_experiance}
                                onChange={this.onChange}
                            />
                        </FormGroup>

                        <FormGroup>
                        <Label for="exampleCompanyName">Responsability</Label>
                            <Input type="text"

                                placeholder="Responsability"
                                name="responsability"
                                value={this.state.responsability}
                                onChange={this.onChange}
                            />
                        </FormGroup>

                        <FormGroup>
                        <Label for="exampleCompanyName">Comapny Name</Label>
                            <Input type="text"

                                placeholder="comapny_name"
                                name="comapny_name"
                                value={this.state.comapny_name}
                                onChange={this.onChange}
                            />
                        </FormGroup>


                      <Button type="submit" >Save Interviewer</Button> &nbsp;
                     
                       <Link to="/viewInterviewer" className="btn btn-primary">
                            View Department
                       </Link>

                        <br></br>
                    </form>
                </div>
            </div>


        );
    }
}

RegistorInterviewer.propTypes = {
    addInterviewerTask: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { addInterviewerTask }
)(RegistorInterviewer);
