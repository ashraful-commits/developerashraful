import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import ApiSclice from "./api/ApiSlice";


const store = configureStore({
  reducer: {
   [ApiSclice.reducerPath]:ApiSclice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ApiSclice.middleware),
  devTools: true,
});

export default store;
