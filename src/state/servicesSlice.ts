import {
  createSlice,
} from "@reduxjs/toolkit";
import type { ServicesType } from "../serviceTypes";

interface ServicesState {
  status: "idle" | "loading" | "succeeded" | "failed";
  data: ServicesType;
  error: string;
}

const initialState: ServicesState = {
  status: "idle",
  data: [],
  error: "",
};

const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    getServiceListRequired: (state) => {
      state.status = "loading";
      state.error = "";
    },
    getServiceListSuccess: (state, action) => { 
      state.data = action.payload;
      state.status = "succeeded";
    },
    getServiceListFailure: (state) => { 
      state.status = "failed";
      state.error = "Failed to load services";
    }
  },
});

export const { getServiceListRequired, getServiceListSuccess, getServiceListFailure } =
  servicesSlice.actions;

export default servicesSlice.reducer;
