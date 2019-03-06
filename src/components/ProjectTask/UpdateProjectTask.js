import React, { Component } from "react";
import { connect } from "react-redux";
import classnames from "classnames";
import PropTypes from "prop-types";
import {
  getProjectTask,
  addProjectTask
} from "../../actions/projectTaskActions";
import './Men.css';

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

    const { id, jobtitle, city, country,job_category,job_type,start_date,closing_date,expected_salary,job_description,job_responsability,requirment } = nextProps.project_task;

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

  /*
   "id": 3,
    "jobtitle": "fdf",
    "city": "Panadrayfda",
    "country": "Sri Lanka",
    "job_category": "3",
    "job_type": "fd",
    "start_date": "fd",
    "closing_date": "de",
    "expected_salary": "dfg",
    "job_description": "df",
    "job_responsability": "fd",
    "requirment": "fd",
    */

  onSubmit(e) {
    e.preventDefault();
    const updatedTask = {
      id: this.state.id,
      jobtitle: this.state.jobtitle,
      city: this.state.city,
      country: this.state.country,
      job_category:this.state.job_category,
      job_type:this.state.job_type,
      start_date:this.state.start_date,
      closing_date:this.state.closing_date,
      expected_salary:this.state.expected_salary,
      job_description:this.state.job_description,
      job_responsability:this.state.job_responsability,
      requirment:this.state.requirment
    };

    this.props.addProjectTask(updatedTask, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    const { errors } = this.state;
    return (
      <div className="addProjectTask">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <a href="/" className="btn btn-light">
                Back to Board
              </a>
              <h4 className="display-4 text-center">
                Add /Update Project Task
              </h4>
              <form onSubmit={this.onSubmit}>

              <div className="form-group">
                  <textarea
                    className="form-control form-control-lg"
                    placeholder="Acceptance Criteria"
                    name="jobtitle"
                    value={this.state.jobtitle}
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <textarea
                    className="form-control form-control-lg"
                    placeholder="Acceptance Criteria"
                    name="city"
                    value={this.state.city}
                    onChange={this.onChange}
                  />
                </div>
              
                <input
                  type="submit"
                  className="btn btn-primary btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
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
