import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_ENDPOINT = 'https://64db4d9d593f57e435b0c0fa.mockapi.io/adverts';

export const fetchAdverts = createAsyncThunk('adverts/fetchAdverts', async () => {
    const response = await axios.get();
    return response.data
});

const advertsSlice = createSlice({
    name: 'adverts',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAdverts.fulfilled, (state, action) => {
            return action.payload;
        });
    },
});

export default advertsSlice.reducer;