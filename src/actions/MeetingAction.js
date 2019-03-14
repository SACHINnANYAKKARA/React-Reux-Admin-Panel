import axios from "axios";
import {

  GET_ERRORS
 
} from "./types";

 
  export const addMeetingTask = (meeting_task,pt_id,history) => async dispatch => {
      try {
        await axios.post(`http://localhost:8090/users/${pt_id}/meetingList/`, meeting_task);
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


    