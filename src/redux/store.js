import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import themeReducer from "./themeSlice";
import authListener from "../configs/authListener";

const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
  },
});

// Start Firebase Auth Listener
authListener(store);

export default store;
