import axios from "axios";
import {
  GET_ERRORS,
  GET_PROJECT_VIEWS
 
} from "./types";

export const getBacklog = () => async dispatch => {
  const res = await axios.get("http://localhost:8090/postajob");
  dispatch({
    type: GET_PROJECT_VIEWS,
    payload: res.data
  });
};

export const addProjectTask = (project_task, history) => async dispatch => {
    try {
      await axios.post("http://localhost:8090/postajob", project_task);
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
  