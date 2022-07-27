import { CATEGORIES } from "../actions/types";

const categoryReducer = function(state = [], action) {
  switch(action.type) {
    case CATEGORIES: 
      return action.payload
    default: 
      return state;  
  }
}

export default categoryReducer;