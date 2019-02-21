import axios from "axios";
import {
  GET_ERRORS,
  GET_PROJECT_VIEWS,
  DELETE_PROJECT_TASK,
  GET_PROJECT_TASK
} from "./types";

export const getBacklog = () => async dispatch => {
  const res = await axios.get("http://localhost:8080/api/board/all");
  dispatch({
    type: GET_PROJECT_VIEWS,
    payload: res.data
  });
};

export const addProjectTask = (project_task, history) => async dispatch => {
    try {
      await axios.post("http://localhost:8080/api/board", project_task);
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
  