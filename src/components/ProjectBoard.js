import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProjectTaskItem from "./ProjectTask/ProjectTaskItem";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getBacklog } from "../actions/projectViewActions";
import { Pagination } from 'semantic-ui-react'
import './SideMenuBar.css';

class ProjectBoard extends Component {
  componentDidMount() {
    this.props.getBacklog();
  }
  render() {
    const { project_tasks } = this.props.project_tasks;

    let BoardContent;
    let todoItems = [];

    const BoardAlgorithm = project_tasks => {
      if (project_tasks.length < 1) {
        return (
          <div className="alert alert-info text-center" role="alert">
            No Project Tasks on this board
          </div>
        );
      } else {
        const tasks = project_tasks.map(project_task => (
          <div>
            <ProjectTaskItem key={project_task.id} project_task={project_task} />
            <br></br>
          </div>
        ));

        todoItems.push(tasks);

        return (



          <React.Fragment>
            <div class="ui grid">




              <div class="sixteen wide column">



                <div class="two">
                  <div class="five ui buttons">



                    <button componentClass={Link} href="/addProjectTask" class="ui button">Project Task</button>
                    <button componentClass={Link} href="/addProjectView" class="ui button">Project View</button>
                    <button componentClass={Link} href="/addNewCompany" class="ui button">New Company</button>
                    <button componentClass={Link} href="/addNewJob" class="ui button">New Job</button>
                    <button componentClass={Link} href="/addProjectTask" class="ui button">Project Task</button>
                    <button componentClass={Link} href="/addProjectTask" class="ui button"></button>

                  </div>

                  <hr />



                </div>
              </div>

              <div class="twelve wide column">

                {todoItems}
                <Pagination
                  boundaryRange={0}
                  defaultActivePage={1}
                  ellipsisItem={null}
                  firstItem={null}
                  lastItem={null}
                  siblingRange={1}
                  totalPages={10}
                />


              </div>


              <div class="two wide column">
                <div class="ui massive vertical menu">
                  <a class="active item">
                    <div class="ui small teal label">1</div>
                    Inbox
                 </a>
                  <a class="item">
                    <div class="ui small teal label">1</div>
                    Inbox
                 </a>
                  <a class="item">
                    <div class="ui small teal label">1</div>
                    Inbox
                 </a>
                  <a class="item">
                    <div class="ui small label">51</div>
                    Spam
                   </a>
                  <a class="item">
                    <div class="ui small label">1</div>
                    Updates
                  </a>

                </div>
              </div>



              <br></br>



              <h1></h1>
            </div>




          </React.Fragment>
        );
      }
    };

    BoardContent = BoardAlgorithm(project_tasks);

    return (
      <div class="container">

        <br />

        {BoardContent}

      </div>
    );
  }
}

ProjectBoard.propTypes = {
  getBacklog: PropTypes.func.isRequired,
  project_tasks: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  project_tasks: state.project_view
});

export default connect(
  mapStateToProps,
  { getBacklog }
)(ProjectBoard);
