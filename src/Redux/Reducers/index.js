import { combineReducers } from "redux";

import getTodos from "./ReducersApi";
import getAbout from "./ReducersMock";
import getCountry from "./ReducersCountry";

const rootReducer = combineReducers({ getTodos, getAbout, getCountry });

export default rootReducer;
