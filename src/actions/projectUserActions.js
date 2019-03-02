import axios from "axios";
import {
  GET_ERRORS,
  GET_PROJECT_USER,
  GET_PROJECT_USERS

 
} from "./types";

export const getBacklog = () => async dispatch => {
  const res = await axios.get("http://localhost:8090/users");
  dispatch({
    type: GET_PROJECT_USERS,
    payload: res.data
  });
};

export const getProjectUser = (pt_id, history) => async dispatch => {
    try {
      const res = await axios.get(`http://localhost:8090/users/${pt_id}`);
      dispatch({
        type: GET_PROJECT_USER,
        payload: res.data
      });
    } catch (error) {
      history.push("/");
    }
  };
  