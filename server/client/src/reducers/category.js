import { USER_CATEGORY } from "../actions/types";

const categoryReducer = function(state = [], action) {
  switch(action.type) {
    case USER_CATEGORY: 
      return action.payload
    default: 
      return state;  
  }
}

export default categoryReducer;