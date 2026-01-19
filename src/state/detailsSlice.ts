import {
  createSlice,
} from "@reduxjs/toolkit";
import type { DetailsType } from "../serviceTypes";

interface DetailsState {
  status: "idle" | "loading" | "succeeded" | "failed";
  data: DetailsType | null;
  error: string;
}

const initialState: DetailsState = {
  status: "idle",
  data: null,
  error: "",
};

const detailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {
    getDetailsRequired: (state) => {
      state.status = "loading";
      state.error = "";
    },
    getDetailsSuccess: (state, action) => {
      state.data = action.payload;
      state.status = "succeeded";
    },
    getDetailsFailure: (state) => {
      state.status = "failed";
      state.error = "Failed to load services";
    },
  },
});

export const { getDetailsRequired, getDetailsSuccess, getDetailsFailure } =
  detailsSlice.actions;

export default detailsSlice.reducer;