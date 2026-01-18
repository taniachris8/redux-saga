
import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { DetailsType } from "../serviceTypes";

const url = "http://localhost:7070/api/services/";

export const fetchDetails = createAsyncThunk(
  "service/details",
  async (id: string) => {
    const response = await fetch(url + id);
    const result = await response.json();
    return result;
  }
);

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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchDetails.fulfilled,
        (state, action: PayloadAction<DetailsType>) => {
          state.status = "succeeded";
          state.data = action.payload;
        }
      )
      .addCase(fetchDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload
      });
  },
});

export default detailsSlice.reducer;