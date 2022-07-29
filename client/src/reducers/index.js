import { combineReducers } from "redux";
import AuthReducer from './auth';
import videoReducer from "./videos";
import categoryReducer from "./category";
import currentUserReducer from "./current-user";

const rootReducer = combineReducers({
  auth: AuthReducer,
  videos: videoReducer,
  userCategory: categoryReducer,
  currentUser: currentUserReducer
});

export default rootReducer;