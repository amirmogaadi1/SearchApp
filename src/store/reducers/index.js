import { combineReducers } from "@reduxjs/toolkit";
import resultReducer from './resultReducer';

const rootReducer = combineReducers({
    resultReducer,
});

export default rootReducer;
