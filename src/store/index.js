import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import taskSlice from "./taskSlice";

const reducer = combineReducers({
  userReducer: userSlice,
  taskReducer: taskSlice,
});
export const store = configureStore({
  reducer,
});
