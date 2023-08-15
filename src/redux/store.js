import { configureStore } from "@reduxjs/toolkit";
import advertsReduser from "./reducers/rootReducer";

export const store = configureStore({
    reducer: {
        adverts: advertsReduser,
    },
});

export default store;