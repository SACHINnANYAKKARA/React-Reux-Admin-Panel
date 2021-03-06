import axios from "axios";
import {

  GET_ERRORS
 
} from "./types";

export const addProjectTask = (project_task, history) => async dispatch => {
    try {
      await axios.post("http://localhost:8090/usersUpdate", project_task);
      history.push("/");
      dispatch({
        type: GET_ERRORS,
        payload: {}
      });
    } catch (error) {
      dispatch({
        type: GET_ERRORS,
        payload: error.response.data
      });
    }
  };
  

  export const getProjectTask = (pt_id, history) => async dispatch => {
    try {
      const res = await axios.get(`http://localhost:8090/users/${pt_id}`);
      dispatch({
        type: GET_APPLICANT_USERS,
        payload: res.data
      });
    } catch (error) {
    //  history.push("/");
    }
  };
  
