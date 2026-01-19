import {
  createSlice
} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { DetailsType } from "../serviceTypes";

interface DetailsState {
  status: "idle" | "loading" | "succeeded" | "failed";
  data: DetailsType | null;
}

const initialState: DetailsState = {
  status: "idle",
  data: null,
};

const detailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {
    getDetailsRequired: (state, _action: PayloadAction<string>) => {
      state.status = "loading";
    },
    getDetailsSuccess: (state, action: PayloadAction<DetailsType>) => {
      state.data = action.payload;
      state.status = "succeeded";
    },
    getDetailsFailure: (state) => {
      state.status = "failed";
    },
  },
});

export const { getDetailsRequired, getDetailsSuccess, getDetailsFailure } =
  detailsSlice.actions;

export default detailsSlice.reducer;