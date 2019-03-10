// Root Reducer
import { combineReducers } from "redux";
import channelsReducer from "./channelsReducer";

export default combineReducers({
  channels: channelsReducer
});
