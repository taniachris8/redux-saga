import {
  createSlice,
} from "@reduxjs/toolkit";
import type { ServicesType } from "../serviceTypes";

interface ServicesState {
  status: "idle" | "loading" | "succeeded" | "failed";
  data: ServicesType;
}

const initialState: ServicesState = {
  status: "idle",
  data: [],
};

const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    getServiceListRequired: (state) => {
      state.status = "loading";
    },
    getServiceListSuccess: (state, action) => { 
      state.data = action.payload;
      state.status = "succeeded";
    },
    getServiceListFailure: (state) => { 
      state.status = "failed";
    }
  },
});

export const { getServiceListRequired, getServiceListSuccess, getServiceListFailure } =
  servicesSlice.actions;

export default servicesSlice.reducer;
