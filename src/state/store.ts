import { configureStore } from "@reduxjs/toolkit";
import servicesReducer from "./servicesSlice";
import detailsReducer from "./detailsSlice";


export const store = configureStore({
  reducer: {
    services: servicesReducer,
    details: detailsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
