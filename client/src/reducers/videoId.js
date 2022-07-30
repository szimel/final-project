import { VIDEO_ID } from "../actions/types";


const videoId = function(state = [], action) {
  switch(action.type) {
    case VIDEO_ID: 
      return action.payload.id
    default: 
      return state;  
  }
};

export default videoId;
