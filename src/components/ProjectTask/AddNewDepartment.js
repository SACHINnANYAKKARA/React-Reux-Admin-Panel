import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addDepartmentTask } from "../../actions/projectDepartmentActions";
import { Button, FormGroup, Input,Label } from 'reactstrap';
import classnames from "classnames";

/*
  "department_name": "ds",
        "total_employee": "ds",
        "department_telephone": "ds",
        "location": "ds",
        "department_role": "sd",
        "company_name": "sd"
        */

class AddNewDepartment extends Component {
    constructor() {
        super();
        this.state = {
            department_name: "",
            total_employee: "",
            department_telephone: "",
            location: "",
            department_role: "",
            company_name: "",
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

            department_name: this.state.department_name,
            total_employee: this.state.total_employee,
            department_telephone: this.state.department_telephone,
            location: this.state.location,
            department_role: this.state.department_role,
            company_name: this.state.company_name


        };
        // console.log(newProjectTask);
        this.props.addDepartmentTask(Department_task, this.props.history);
    }

    render() {
        const { errors } = this.state;
        return (
            <div className="addDepartmentTask">

                <div class="list-groups">

                    <h4>Department</h4>

                    <form onSubmit={this.onSubmit}>

                        <FormGroup>
                        <Label for="exampleCompanyName">Department Name</Label>
                            <input
                                type="text"
                                className={classnames("form-control ", {
                                    "is-invalid": errors.department_name
                                })}
                                name="department_name"
                                value={this.state.department_name}
                                placeholder="Department Name"
                                onChange={this.onChange}
                            />
                            {errors.department_name && (
                                <div className="invalid-feedback">{errors.department_name}</div>
                            )}
                        </FormGroup>


                        <FormGroup>
                        <Label for="exampleCompanyName">Total Employee</Label>
                            <Input type="text"

                                placeholder="Total Employee"
                                name="total_employee"
                                value={this.state.total_employee}
                                onChange={this.onChange}
                            />
                        </FormGroup>

                        <FormGroup>
                        <Label for="exampleCompanyName">Department Telephone</Label>
                            <Input type="text"

                                placeholder="Department Telephone"
                                name="department_telephone"
                                value={this.state.department_telephone}
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
                        <Label for="exampleCompanyName">Department Role</Label>
                            <Input type="text"

                                placeholder="Department Role"
                                name="department_role"
                                value={this.state.department_role}
                                onChange={this.onChange}
                            />
                        </FormGroup>

                        <FormGroup>
                        <Label for="exampleCompanyName">Company Name</Label>
                            <Input type="text"

                                placeholder="Company Name"
                                name="company_name"
                                value={this.state.company_name}
                                onChange={this.onChange}
                            />
                        </FormGroup>



                        <Button type="submit" >Sign in</Button>{}
                        
                        <Link to="/" className="btn btn-light">
                            Back to Board
                       </Link>{}
                       <Link to="/departmentUpdateDelete" className="btn btn-light">
                            Back to Board
                       </Link>

                        <br></br>
                    </form>
                </div>
            </div>


        );
    }
}

AddNewDepartment.propTypes = {
    addDepartmentTask: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { addDepartmentTask }
)(AddNewDepartment);
