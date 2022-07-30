import { VIDEOS } from "../actions/types";

const videoReducer = function(state = [], action) {
  switch(action.type) {
    case VIDEOS: 
      return action.payload.items
    default: 
      return state;  
  }
}


export default videoReducer;