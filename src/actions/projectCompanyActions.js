import axios from "axios";
import {

  GET_ERRORS
 
} from "./types";

 
  export const addCompanyTask = (company_task, history) => async dispatch => {
      try {
        await axios.post("http://localhost:8090/companyUpdate", company_task);
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
    