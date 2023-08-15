import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {fetchAdverts, fetchAdvertById} from "../../api";

export const fetchAdvertsAsync = createAsyncThunk('adverts/fetchAdverts', async () => {
    const response = await fetchAdverts();
    return response;
});

export const fetchAdvertByIdAsync = createAsyncThunk('adverts/fetchAdvertById', async (advertId) => {
    const response = await fetchAdvertById(advertId);
    return response;
})

const advertsSlice = createSlice({
    name: 'adverts',
    initialState: {
        allAdverts: [],
        selectedAdverts: null,
        favorites: [],
        loading: false,
        error: null,
    },
    reducers: {
        fetchAdvertsAsyncRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchAdvertsAsyncSuccess: (state, action) => {
            state.loading = false;
            state.allAdverts = action.payload;
        },
        fetchAdvertsAsyncFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        addToFavorite: (state, action) => {
            const advert = action.payload;
            if (!state.favorites.includes(advert)) {
                state.favorites.push(advert);
            }
        },
        removeFromeFavorites: (state, action) => {
            const advert = action.payload;
        state.favorites = state.favorites.filter(item => item.id !== advert.id);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAdvertsAsync.fulfilled, (state, action) => {
                state.allAdverts = action.payload;
            })
            .addCase(fetchAdvertsAsync.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAdvertsAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
          .addCase(fetchAdvertByIdAsync.fulfilled, (state, action) => {
                state.selectedAdverts = action.payload;
            });
    },
});

export const { addToFavorite, removeFromeFavorites } = advertsSlice.actions;

export default advertsSlice.reducer;