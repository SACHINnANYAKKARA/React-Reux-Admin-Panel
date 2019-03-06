import {

    GET_APPLICANT_USERS
  
} from "../actions/types";

const initialState = {
    project_tasks: [],
    project_task: {}
};

export default function (state = initialState, action) {
    switch (action.type) {

        case GET_APPLICANT_USERS:
            return {
                ...state,
                project_tasks: action.payload
            };

        default:
            return state;
    }
}
