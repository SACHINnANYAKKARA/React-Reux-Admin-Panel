import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './SideMenuBar.css';

class SideBarMenu extends Component {
  render() {
    return (
      <div>
        <div>
          <div class="list-group">


            <a componentClass={Link} href="/" to="/" class="list-group-item"><i class="fa fa-question-circle"></i> <span>Profile</span></a>
            <a componentClass={Link} href="/addNewCompany" to="/addNewCompany" class="list-group-item"><i class="fa fa-credit-card"></i> <span>Registor Company</span></a>
            <a componentClass={Link} href="/addNewDepartment" to="/addNewDepartment" class="list-group-item"><i class="fa fa-credit-card"></i> <span>Registor Department</span></a>
            <a componentClass={Link} href="/addNewJob" to="/addNewJob" class="list-group-item"><i class="fa fa-credit-card"></i> <span>Post A Job</span></a>
            <a componentClass={Link} href="/navr" to="/navr" class="list-group-item"><i class="fa fa-credit-card"></i> <span>Change Password</span></a>
            <a componentClass={Link} href="/registorInterviewer" to="/registorInterviewer" class="list-group-item"><i class="fa fa-credit-card"></i><span>Add Interviewer</span></a>
            <a componentClass={Link} href="/interviewerProfile" to="/interviewerProfile" class="list-group-item"><i class="fa fa-credit-card"></i> <span>View Interviewer</span></a>
            <a componentClass={Link} href="/addMeeting" to="/addMeeting" class="list-group-item"><i class="fa fa-credit-card"></i> <span>Add Meeting</span></a>
            <a componentClass={Link} href="/addNewJob" to="/addNewJob" class="list-group-item"><i class="fa fa-credit-card"></i> <span>Applied Job</span></a>
            <a componentClass={Link} href="/navr" to="/navr" class="list-group-item"><i class="fa fa-credit-card"></i> <span>Log Out</span></a>
            <a componentClass={Link} href="/bilor" to="/bilor" class="list-group-item"><i class="fa fa-credit-card"></i> <span>Profile</span></a>
            <a componentClass={Link} href="/clone" to="/clone" class="list-group-item"><i class="fa fa-credit-card"></i> <span>Job Summary</span></a>
            <a componentClass={Link} href="/academicqualfication" to="/academicqualfication" class="list-group-item"><i class="fa fa-credit-card"></i> <span>Add Employee</span></a>
            <a componentClass={Link} href="/trainingworkshop" to="/trainingworkshop" class="list-group-item"><i class="fa fa-credit-card"></i> <span>Add Questions</span></a>
            <a componentClass={Link} href="/navr" to="/navr" class="list-group-item"><i class="fa fa-credit-card"></i> <span>Change Password</span></a>
            <a componentClass={Link} href="/language" to="/language" class="list-group-item"><i class="fa fa-credit-card"></i><span>Language Proficiency</span></a>

             

          </div>
        </div>
      </div>
    )
  }
}

export default SideBarMenu;

