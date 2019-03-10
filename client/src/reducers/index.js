// Root Reducer
import { combineReducers } from "redux";
import authReducer from "./authReducer";
// import errorReducer from "./errorReducer";
// import profileReducer from "./profileReducer";
import postReducer from "./postReducer";
import channelsReducer from "./channelsReducer";

export default combineReducers({
  auth: authReducer,
  post: postReducer,
  channels: channelsReducer
});
