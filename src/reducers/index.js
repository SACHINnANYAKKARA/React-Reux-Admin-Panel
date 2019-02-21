import { combineReducers } from "redux";
import errorsReducer from "./errorsReducer";
import projectTaskReducer from "./projectTaskReducer";
import ProjectViewReducer from "./ProjectViewReducer";

export default combineReducers({
  //
  errors: errorsReducer,
  project_task: projectTaskReducer,
  project_view:ProjectViewReducer
});
