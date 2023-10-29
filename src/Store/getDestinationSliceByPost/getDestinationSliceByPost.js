import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APIDestination } from "../../api/ApiDestination";

export const fetchGetPostedDestinations = createAsyncThunk("fetch/getPostedDestinations",APIDestination.getPostedDestinations);

const initialState = {
    message: "",
    status: "idle",
    data: null,
};

const postedDestinationsSlice = createSlice({
    name: "postedDestinations",
    initialState,
    extraReducers: (builder) => {
        builder.addCase("fetch/getPostedDestinations/pending", (state) => {
            state.status = "loading";
            state.message = "";
        });
        builder.addCase("fetch/getPostedDestinations/fulfilled", (state, { payload }) => {
            state.status = "success";
            state.data = payload;
        });
        builder.addCase("fetch/getPostedDestinations/rejected", (state, { error }) => {
            state.status = "failed";
            state.data = error.stack;
        });
    },
});

export const selectPostedDestinations = (state) => state.postedDestinations;

export default postedDestinationsSlice.reducer;
