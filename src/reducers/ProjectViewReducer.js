import {
    GET_PROJECT_VIEWS,
    DELETE_PROJECT_VIEW,
    GET_PROJECT_VIEW
  } from "../actions/types";
  
  const initialState = {
    project_tasks: [],
    project_task: {}
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_PROJECT_VIEWS:
        return {
          ...state,
          project_tasks: action.payload
        };
  
      case GET_PROJECT_VIEW:
        return {
          ...state,
          project_task: action.payload
        };
  
      case DELETE_PROJECT_VIEW:
        return {
          ...state,
          project_tasks: state.project_tasks.filter(
            project_task => project_task.id !== action.payload
          )
        };
      default:
        return state;
    }
  }
  