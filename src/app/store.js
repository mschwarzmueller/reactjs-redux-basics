import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";

import math from "./reducers/mathReducer";
import user from "./reducers/userReducer";

export default createStore(
    combineReducers({
        math,
        user
    }),
    {},
    applyMiddleware(logger())
);