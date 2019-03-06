import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./store";
import { Container, Row, Col } from 'reactstrap';
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavigationBar from "./components/NavigationBar";
import SideBarMenu from "./components/SideBarMenu";
import ProjectBoard from "./components/ProjectBoard";
import AddProjectTask from "./components/ProjectTask/AddProjectTask";
import UpdateProjectTask from "./components/ProjectTask/UpdateProjectTask";
import ProjectView from "./components/ProjectView";
import AddProjectView from "./components/ProjectTask/AddProjectView";
import AddNewCompany from "./components/ProjectTask/AddNewCompany";
import AddNewJob from "./components/ProjectTask/AddNewJob";
import AddNewDepartment from "./components/ProjectTask/AddNewDepartment";
import DepartmentUpdateDelete from "./components/ProjectTask/DepartmentUpdateDelete";
import JobUpdateDelete from "./components/ProjectTask/JobUpdateDelete";
import ApplicantView from "./components/ProjectTask/ApplicantView";


/*addProjectViewTask*/
/*AddProjectView*/

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">

            <NavigationBar />
            
            <SideBarMenu />


            <Container>
              <Row>


                <Col xs="12">
                  <Route exact path="/" component={ProjectBoard} />
                  <Route exact path="/addProjectViewTask" component={ProjectView} />
                  <Route exact path="/addProjectTask" component={AddProjectTask} />
                  <Route exact path="/addProjectView" component={AddProjectView} />
                  <Route exact path="/addNewCompany" component={AddNewCompany} />
                  <Route exact path="/addNewJob" component={AddNewJob} />
                  <Route exact path="/addNewDepartment" component={AddNewDepartment} />
                  <Route exact path="/departmentUpdateDelete" component={DepartmentUpdateDelete} />
                  <Route exact path="/jobUpdateDelete" component={JobUpdateDelete} />
                  <Route exact path="/applicantView" component={ApplicantView} />
                </Col>
                <Route
                  exact
                  path="/updateProjectTask/:pt_id"
                  component={UpdateProjectTask}
                />
              </Row>
            </Container>
          </div>
        </Router>

      </Provider>
    );
  }
}

export default App;
