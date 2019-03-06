import React, { Component } from "react";
import { connect } from "react-redux";
import classnames from "classnames";
import PropTypes from "prop-types";
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link } from "react-router-dom";
import './Men.css';
import {
  getProjectTask,
  addProjectTask
} from "../../actions/projectTaskActions";


class UpdateProjectTask extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
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

    const { id, jobtitle, city, country, job_category, job_type, start_date, closing_date, expected_salary, job_description, job_responsability, requirment } = nextProps.project_task;

    this.setState({
      id,
      jobtitle,
      city,
      country,
      job_category,
      job_type,
      start_date,
      closing_date,
      expected_salary,
      job_description,
      job_responsability,
      requirment
    });
  }

  componentDidMount() {
    const { pt_id } = this.props.match.params;
    this.props.getProjectTask(pt_id);
  }

 
  onSubmit(e) {
    e.preventDefault();
    const updatedTask = {
      id: this.state.id,
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

    this.props.addProjectTask(updatedTask, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    const { errors } = this.state;
    return (

      <div class="Appcontainer">

        <h4>Company Details</h4>

        <Form onSubmit={this.onSubmit}>

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
            <Label for="exampleCompanyName">Country</Label>
            <Input type="text"

              placeholder="Country"
              name="country"
              value={this.state.country}
              onChange={this.onChange}
            />
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
            <Label for="exampleCompanyName">Requriment</Label>
            <Input type="textarea"

              placeholder="Requriemnt"
              name="requirment"
              value={this.state.requirment}
              onChange={this.onChange}
            />
          </FormGroup>

          <Row form>
            <Col md={12}>
              <FormGroup>
                <Label for="exampleCompanyName">Job Category</Label>
                <Input type="text"

                  placeholder="Job Category"
                  name="job_category"
                  value={this.state.job_category}
                  onChange={this.onChange}
                />
              </FormGroup>
            </Col>

            <Col md={12}>
            <FormGroup>
            <Label for="exampleCompanyName">Job Type</Label>
            <Input type="text"

              placeholder="Job Type"
              name="job_type"
              value={this.state.job_type}
              onChange={this.onChange}
            />
          </FormGroup>

            </Col>

            <Col md={12}>
            <FormGroup>
            <Label for="exampleCompanyName">Expected Salary</Label>
            <Input type="text"
              placeholder="Expected Slary"
              name="expected_salary"
              value={this.state.expected_salary}
              onChange={this.onChange}
            />
          </FormGroup>
            </Col>

            <Col md={12}>
            <FormGroup>
            <Label for="exampleCompanyName">Job Description</Label>
            <Input type="text"

              placeholder="Job Description"
              name="job_description"
              value={this.state.job_description}
              onChange={this.onChange}
            />
          </FormGroup>
            </Col>

            <Col md={12}>
            <FormGroup>
            <Label for="exampleCompanyName">Job Responsabiliety</Label>
            <Input type="textarea"

              placeholder="Job Responsbiliety"
              name="job_responsability"
              value={this.state.job_responsability}
              onChange={this.onChange}
            />
          </FormGroup>
            </Col>

            <Col md={12}>
              <FormGroup>
               
              </FormGroup>
            </Col>

            <Col md={12}>
              <FormGroup>
                
              </FormGroup>
            </Col>


          </Row>

          <Button type="submit" >Sign in</Button>

        </Form>

        <br></br>

      </div>


    );
  }
}

UpdateProjectTask.propTypes = {
  project_task: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  getProjectTask: PropTypes.func.isRequired,
  addProjectTask: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  project_task: state.project_task.project_task,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { getProjectTask, addProjectTask }
)(UpdateProjectTask);
