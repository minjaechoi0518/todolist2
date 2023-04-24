import { legacy_createStore as createStore } from "redux";
import { combineReducers } from "redux";
import inputBodyReducer from "../modules/inputBodyReducer";
import inputTitleReducer from "../modules/inputTitleReducer";
import taskReducer from "../modules/taskReducer";
//객체. Key value
const rootReducer = combineReducers({
  inputBody: inputBodyReducer,
  inputTitle: inputTitleReducer, // 디폴트값은 문자열.
  task: taskReducer, //디폴트값은 배열.
});
const store = createStore(rootReducer);
export default store;
