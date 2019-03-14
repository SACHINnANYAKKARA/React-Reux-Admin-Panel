import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addMeetingTask } from "../../actions/MeetingAction";
import { Button, FormGroup, Input,Label } from 'reactstrap';
import classnames from "classnames";
import './Men.css';

/*
        "meeting_subject": "ds",
        "reminds": "ds",
        "start_date": "2019-03-06T18:30:00.000+0000",
        "start_time": "21:00:00",
        "end_time": "19:05:06",
        "location": "ds",
        "description": "ds"
        */

class AddMeeting extends Component {
    constructor() {
        super();
        this.state = {
            meeting_subject: "",
            reminds: "",
            start_date: "",
            start_time: "",
            end_time: "",
            location: "",
            description:"",
            id:"2",
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
        const Department_task = {

            meeting_subject: this.state.meeting_subject,
            reminds: this.state.reminds,
            start_date: this.state.start_date,
            start_time: this.state.start_time,
            end_time: this.state.end_time,
            location: this.state.location,
            description: this.state.description

        };
        // console.log(newProjectTask);
        this.props.addMeetingTask(Department_task,this.state.id,this.props.history);
    }

    render() {
        const { errors } = this.state;
        return (
            <div className="addDepartmentTask">

                <div class="list-groups">
                
                    <h4>Add Meeting</h4>

                    <form onSubmit={this.onSubmit}>

                        <FormGroup>
                        <Label for="exampleCompanyName">Meeting Subject</Label>
                            <input
                                type="text"
                                className={classnames("form-control ", {
                                    "is-invalid": errors.meeting_subject
                                })}
                                name="meeting_subject"
                                value={this.state.meeting_subject}
                                placeholder="Meeting Subject"
                                onChange={this.onChange}
                            />
                            {errors.meeting_subject && (
                                <div className="invalid-feedback">{errors.meeting_subject}</div>
                            )}
                        </FormGroup>


                        <FormGroup>
                        <Label for="exampleCompanyName">Reminds</Label>
                            <Input type="text"

                                placeholder="Reminds"
                                name="reminds"
                                value={this.state.reminds}
                                onChange={this.onChange}
                            />
                        </FormGroup>

                        <FormGroup>
                        <Label for="exampleCompanyName">Start Date</Label>
                            <Input type="text"

                                placeholder="Start Date"
                                name="start_date"
                                value={this.state.start_date}
                                onChange={this.onChange}
                            />
                        </FormGroup>

                        <FormGroup>
                        <Label for="exampleCompanyName">Start Time</Label>
                            <Input type="text"

                                placeholder="Start Time"
                                name="start_time"
                                value={this.state.start_time}
                                onChange={this.onChange}
                            />
                        </FormGroup>


                        <FormGroup>
                        <Label for="exampleCompanyName">End Time</Label>
                            <Input type="text"

                                placeholder="End Time"
                                name="end_time"
                                value={this.state.end_time}
                                onChange={this.onChange}
                            />
                        </FormGroup>

                        <FormGroup>
                        <Label for="exampleCompanyName">Location</Label>
                            <Input type="text"

                                placeholder="Location"
                                name="location"
                                value={this.state.location}
                                onChange={this.onChange}
                            />
                        </FormGroup>

                        <FormGroup>
                        <Label for="exampleCompanyName">Description</Label>
                            <Input type="text"

                                placeholder="Description"
                                name="description"
                                value={this.state.description}
                                onChange={this.onChange}
                            />
                        </FormGroup>



                      <Button type="submit" >Save Department</Button> &nbsp;
                     
                       <Link to="/viewMeeting" className="btn btn-primary">
                            View Meeting
                       </Link>

                        <br></br>
                    </form>
                </div>
            </div>


        );
    }
}

AddMeeting.propTypes = {
    addMeetingTask: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { addMeetingTask }
)(AddMeeting);
