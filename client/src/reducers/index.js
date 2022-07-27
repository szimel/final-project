import { combineReducers } from "redux";
import AuthReducer from './auth';
import videoReducer from "./videos";
import categoryReducer from "./category";

const rootReducer = combineReducers({
  auth: AuthReducer,
  videos: videoReducer,
  category: categoryReducer
});

export default rootReducer;