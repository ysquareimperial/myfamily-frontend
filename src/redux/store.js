import { configureStore } from "@reduxjs/toolkit";
import counterReducer  from "./conterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
