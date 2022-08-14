import { combineReducers } from "redux";


import login from "./login";
import appSettings from "./appSettings";

export default combineReducers({
  login,
  appSettings
});
