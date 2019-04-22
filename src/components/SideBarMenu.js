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
            <a componentClass={Link} href="/author" to="/author" class="list-group-item"><i class="fa fa-credit-card"></i> <span>Author</span></a>
            <a componentClass={Link} href="/book" to="/book" class="list-group-item"><i class="fa fa-credit-card"></i> <span>Book</span></a>
            <a componentClass={Link} href="/category" to="/category" class="list-group-item"><i class="fa fa-credit-card"></i> <span>Category</span></a>
            <a componentClass={Link} href="/magazine" to="/magazine" class="list-group-item"><i class="fa fa-credit-card"></i> <span>Magazine</span></a>
            <a componentClass={Link} href="/manuScript" to="/manuScript" class="list-group-item"><i class="fa fa-credit-card"></i> <span>Manuscript</span></a>
            <a componentClass={Link} href="/navr" to="/navr" class="list-group-item"><i class="fa fa-credit-card"></i> <span>NewsPaper</span></a>
            <a componentClass={Link} href="/language" to="/language" class="list-group-item"><i class="fa fa-credit-card"></i><span>Language Proficiency</span></a>

             

          </div>
        </div>
      </div>
    )
  }
}

export default SideBarMenu;

