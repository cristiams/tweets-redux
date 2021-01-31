import { combineReducers } from "redux";
import modalsReducer from "./modalsReducer";
// import validationsReducer from "./validationsReducer";
// import tweetsReducer from "./tweetsReducer";

export default combineReducers({ // se encarga de combinar todos los reducer
  modals: modalsReducer/*,
  validations: validationsReducer,
  tweets: tweetsReducer*/
});