import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteProjectTask } from "../../actions/projectTaskActions";
import './Men.css';

class UpdateProjectView extends Component {
  onDeleteClick(pt_id) {
    this.props.deleteProjectTask(pt_id);
  }

  render() {
    const { project_task } = this.props;
    return (
      <div class="ui grid">
        <div class="fourteen wide column">
          <div class="ui cards">
            <div class="card">
              <div class="content">
                <div class="header">ID: {project_task.id}</div>
                <div class="description">
                  {project_task.summary}
                  {project_task.acceptanceCriteria}
                </div>
              </div>
              <div class="ui bottom attached button">
                <i class="add icon"></i>
                Add Friend
    </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

UpdateProjectView.propTypes = {
  deleteProjectTask: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteProjectTask }
)(UpdateProjectView);
