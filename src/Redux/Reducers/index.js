import { combineReducers } from "redux";

import getTodos from "./ReducersApi";
import getAbout from "./ReducersMock";

const rootReducer = combineReducers({ getTodos, getAbout });

export default rootReducer;
