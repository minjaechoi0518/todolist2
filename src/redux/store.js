//완성?
import { legacy_createStore } from "redux";
import rootReducer from "./index";

// 스토어 생성
const store = legacy_createStore(rootReducer);

export default store;
