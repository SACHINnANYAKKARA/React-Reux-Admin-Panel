import React, { Component } from "react";
import { Link } from "react-router-dom";
import UpdateProjectView from "./ProjectTask/UpdateProjectView";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getBacklog } from "../actions/projectViewActions";

class ProjectView extends Component {
  componentDidMount() {
    this.props.getBacklog();
  }
  render() {
    const { project_tasks } = this.props.project_tasks;

    let BoardContent;
    let todoItems=[];
  
    const BoardAlgorithm = project_tasks => {
      if (project_tasks.length < 1) {
        return (
          <div className="alert alert-info text-center" role="alert">
            No Project Tasks on this board
          </div>
        );
      } else {
        const tasks = project_tasks.map(project_task => (
          <UpdateProjectView key={project_task.id} project_task={project_task} />
        ));

            todoItems.push(tasks);
        
        return (
          <React.Fragment>
            <div className="container">
              <div className="row">
                  
                <div className="col-md-12">
                
                  {todoItems}
                </div>
             
               
              </div>
            </div>
          </React.Fragment>
        );
      }
    };

    BoardContent = BoardAlgorithm(project_tasks);

    return (
      <div className="container">
        <Link to="/addProjectView" className="btn btn-primary mb-3">
          <i className="fas fa-plus-circle"> Create Project Task</i>
        </Link>
      
        <br />
        <hr />
        {BoardContent}
      </div>
    );
  }
}

ProjectView.propTypes = {
  getBacklog: PropTypes.func.isRequired,
  project_tasks: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  project_tasks: state.project_view
});

export default connect(
  mapStateToProps,
  { getBacklog }
)(ProjectView);
