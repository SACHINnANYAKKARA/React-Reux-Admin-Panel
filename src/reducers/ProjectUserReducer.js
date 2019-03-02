import {
    GET_PROJECT_USER,
    GET_PROJECT_USERS
  } from "../actions/types";
  
  const initialState = {
    project_tasks: [],
    project_task: {}
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_PROJECT_USERS:
        return {
          ...state,
          project_tasks: action.payload
        };
  
      case GET_PROJECT_USER:
        return {
          ...state,
          project_task: action.payload
        };
    
      default:
        return state;
    }
  }
  