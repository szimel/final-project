import { CATEGORY_ID } from "../actions/types";


const categoryId = function(state = [], action) {
  switch(action.type) {
    case CATEGORY_ID: 
      return action.payload.id
    default: 
      return state;  
  }
};

export default categoryId;