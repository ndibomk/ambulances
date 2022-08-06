import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./features/authSlice";
import projectReducer from "./features/projectSlice";
import caretakerReducer from './features/caretaker'
export default configureStore({
  reducer: {
    auth: AuthReducer,
    project:projectReducer,
    caretaker:caretakerReducer,
  },
});
