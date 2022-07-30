import { combineReducers } from "redux";
import AuthReducer from './auth';
import videoReducer from "./videos";
import categoryReducer from "./category";
import currentUserReducer from "./current-user";
import videoId from "./videoId";
import categoryId from "./categoryId";

const rootReducer = combineReducers({
  auth: AuthReducer,
  videos: videoReducer,
  videoId: videoId,
  categoryId: categoryId,
  currentUser: currentUserReducer,
  user: categoryReducer
});

export default rootReducer;