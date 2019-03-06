
import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteProjectTask } from "../../actions/projectTaskActions";
import './Men.css';


class ProjectTaskItem extends Component {
  onDeleteClick(pt_id) {
    this.props.deleteProjectTask(pt_id);
  }

  render() {
    const { project_task } = this.props;
    return (
      <div className="card mb-4">
        <div className="card-header">ID: {project_task.id}</div>
        <div className="card-body">
          <h5 className="card-title text-primary">City : {project_task.city} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  Country : {project_task.country} &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; Start Date : {project_task.start_date} &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; End Date : {project_task.closing_date} &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  </h5>
          <hr class="list" />
          <Link
            to={`updateProjectTask/${project_task.id}`}
            className="btn btn-primary"
          >
            View Details
          </Link>
          &nbsp;
          <Link to="/applicantView" className="btn btn-danger">
            View Department
          </Link>
        </div>

      </div>

    );
  }
}

ProjectTaskItem.propTypes = {
  deleteProjectTask: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteProjectTask }
)(ProjectTaskItem);
