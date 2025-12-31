import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice';
import jobReducer from './jobSlice';
import jobSlice from './jobSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    job: jobSlice,
    jobs: jobReducer,
  },
});

export default store;