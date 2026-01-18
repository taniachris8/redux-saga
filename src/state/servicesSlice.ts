import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { ResponseType, ServicesType } from "../serviceTypes";

const url = "http://localhost:7070/api/services";

export const fetchServices = createAsyncThunk<
  ResponseType,
  string,
  { rejectValue: string }
>("services/fetchServices", async () => {
  const response = await fetch(url);
  const result: ResponseType = await response.json();
  console.log("from fetchServices func", result);
//   if (result.Response === "False") {
//     return rejectWithValue(result.Error as string);
//   }
  return result;
});

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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchServices.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchServices.fulfilled,
        (state, action: PayloadAction<ResponseType>) => {
          state.status = "succeeded";
          state.data = action.payload;
        }
      )
      .addCase(fetchServices.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload ?? action.error.message ?? "Unknown Error";
      });
  },
});

export default servicesSlice.reducer;
